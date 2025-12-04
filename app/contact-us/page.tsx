"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { supabase } from "@/lib/supabase"

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)

    const contacts = [
        { label: "General Inquiries", email: "info@fyndmee.app", icon: "💬" },
        { label: "Support", email: "admin@fyndmee.app", icon: "🛟" },
        // { label: "Any", email: "any@fyndmee.app", icon: "💼" },
        // { label: "Marketing Team", email: "lina@fyndmee.app", icon: "📰" },
    ]

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.email || !formData.name || !formData.subject || !formData.message) {
            setMessage("Please fill in all fields")
            setIsSuccess(false)
            return
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setMessage("Please enter a valid email address")
            setIsSuccess(false)
            return
        }

        setIsLoading(true)
        setMessage("")

        try {
            const { data, error } = await supabase
                .from('contact-us-website')
                .insert([
                    {
                        email: formData.email,
                        name: formData.name,
                        subject: formData.subject,
                        content: formData.message, // Note: using 'message' as 'content'
                        subscribed_at: new Date().toISOString(),
                        source: 'fyndmee website'
                    }
                ])

            if (error) {
                throw error
            }

            setMessage("✅ Message sent successfully!")
            setIsSuccess(true)
            setFormData({ name: "", email: "", subject: "", message: "" })

            setTimeout(() => {
                setMessage("")
            }, 5000)

        } catch (error) {
            console.error('Error sending message:', error)
            setMessage("❌ Failed to send message. Please try again.")
            setIsSuccess(false)
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:via-slate-950 dark:to-black px-4 py-20">
            <div className="fixed inset-0 overflow-hidden pointer-events-none dark:block hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Header */}
            <header >
                <div className="container mx-auto px-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[#AB1E3E] hover:text-rose-700 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </header>

            <div className="relative z-10 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        Get in{" "}
                        <span className="bg-gradient-to-r from-[#AB1E3E] to-rose-500 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h1>
                    <p className="text-gray-600 dark:text-white/60 text-lg">
                        We'd love to hear from you. Send us a message or reach out directly.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-white/10 p-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/40 focus:outline-none focus:border-[#AB1E3E] transition-colors"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/40 focus:outline-none focus:border-[#AB1E3E] transition-colors"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/40 focus:outline-none focus:border-[#AB1E3E] transition-colors"
                                    placeholder="How can we help?"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-white/80 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/40 focus:outline-none focus:border-[#AB1E3E] transition-colors resize-none"
                                    placeholder="Tell us more about your inquiry..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-[#AB1E3E] to-rose-500 text-white/90 font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-[#AB1E3E]/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                            >
                                {isLoading ? "Sending..." : "Send Message"}
                            </button>

                            {message && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mt-4 p-4 rounded-xl border ${isSuccess
                                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
                                        : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
                                        }`}
                                >
                                    {message}
                                </motion.div>
                            )}

                        </form>
                    </motion.div>

                    {/* Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Or Reach Us Directly</h2>
                        {contacts.map((contact, index) => (
                            <motion.a
                                key={index}
                                href={`mailto:${contact.email}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="group flex items-center bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 p-6 hover:border-[#AB1E3E]/50 transition-all duration-300 hover:scale-105"
                            >
                                <div className="text-4xl mr-4">{contact.icon}</div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                        {contact.label}
                                    </h3>
                                    <p className="text-[#AB1E3E] group-hover:text-rose-500 transition-colors">
                                        {contact.email}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
