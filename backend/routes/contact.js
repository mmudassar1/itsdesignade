import express from 'express';
import Contact from '../models/Contact.js';
import { sendContactEmail } from '../utils/emailService.js';

const router = express.Router();

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
    try {
        const {
            name,
            email,
            companyName,
            designation,
            phone,
            services,
            budget,
            hearAboutUs,
            message
        } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Please provide name, email, and message'
            });
        }

        // Get IP address and user agent
        const ipAddress = req.ip || req.connection.remoteAddress;
        const userAgent = req.get('user-agent');

        // Create contact entry
        const contact = new Contact({
            name,
            email,
            companyName,
            designation,
            phone,
            services: Array.isArray(services) ? services : [],
            budget,
            hearAboutUs,
            message,
            ipAddress,
            userAgent
        });

        // Save to database
        await contact.save();

        // Send email notification
        try {
            await sendContactEmail(contact);
        } catch (emailError) {
            console.error('Email sending failed:', emailError.message);
            // Don't fail the request if email fails
        }

        res.status(201).json({
            success: true,
            message: 'Thank you for contacting us! We will get back to you soon.',
            data: {
                id: contact._id,
                name: contact.name,
                email: contact.email
            }
        });

    } catch (error) {
        console.error('Contact form error:', error);

        // Handle validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: messages
            });
        }

        // Handle MongoDB connection errors
        if (error.name === 'MongooseError' || error.message.includes('buffering timed out')) {
            return res.status(503).json({
                success: false,
                message: 'Service temporarily unavailable. Please try again later or contact us directly via email.',
                isDbError: true
            });
        }

        res.status(500).json({
            success: false,
            message: 'Failed to submit contact form. Please try again later.'
        });
    }
});

// @route   GET /api/contact
// @desc    Get all contacts (admin only - add authentication later)
// @access  Private
router.get('/', async (req, res) => {
    try {
        const { status, limit = 50, page = 1 } = req.query;

        const query = status ? { status } : {};
        const skip = (page - 1) * limit;

        const contacts = await Contact.find(query)
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .skip(skip);

        const total = await Contact.countDocuments(query);

        res.status(200).json({
            success: true,
            data: contacts,
            pagination: {
                total,
                page: parseInt(page),
                pages: Math.ceil(total / limit)
            }
        });

    } catch (error) {
        console.error('Get contacts error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch contacts'
        });
    }
});

// @route   GET /api/contact/:id
// @desc    Get single contact
// @access  Private
router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        res.status(200).json({
            success: true,
            data: contact
        });

    } catch (error) {
        console.error('Get contact error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch contact'
        });
    }
});

// @route   PATCH /api/contact/:id/status
// @desc    Update contact status
// @access  Private
router.patch('/:id/status', async (req, res) => {
    try {
        const { status } = req.body;

        if (!['new', 'contacted', 'in-progress', 'completed', 'archived'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status value'
            });
        }

        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        );

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Status updated successfully',
            data: contact
        });

    } catch (error) {
        console.error('Update status error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update status'
        });
    }
});

// @route   DELETE /api/contact/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Contact deleted successfully'
        });

    } catch (error) {
        console.error('Delete contact error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete contact'
        });
    }
});

export default router;
