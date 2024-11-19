"use client";

import React, { useState } from "react";
import { Send, Loader2, Phone } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/types/types";
import { ZodError } from "zod"; // Import ZodError for strong typing
import Image from "next/image";

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = () => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors: Partial<Record<keyof ContactFormData, string>> =
          {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            formattedErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(formattedErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-2 flex justify-center items-center gap-2">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Contact Us</h1>
          <Image
            src="tsalogo.svg"
            width={500}
            height={500}
            alt="Contact Us"
            className="w-10 h-auto"
          />
        </div>
        <p className="text-red-600 md:text-xl text-center mb-5">
          We would love to hear from you. Send us a message and we will respond
          as soon as possible.
        </p>

        {/* Form Card */}
        <div className="bg-gradient-to-t from-black to-red-950 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-red-800/50">
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-900/50 text-green-200 rounded-md border border-green-700/50">
              Thank you for your message! We will get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-900/50 text-red-200 rounded-md border border-red-700/50">
              Something went wrong. Please try again later.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-red-200 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-red-900/30 border rounded-md focus:ring-2 focus:ring-red-500 outline-none 
                  transition-all text-white placeholder-red-300/50
                  ${errors.name ? "border-red-500" : "border-red-800/50"}`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-red-200 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-red-900/30 border rounded-md focus:ring-2 focus:ring-red-500 outline-none 
                  transition-all text-white placeholder-red-300/50
                  ${errors.email ? "border-red-500" : "border-red-800/50"}`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-red-200 mb-1"
              >
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-2 bg-red-900/30 border rounded-md focus:ring-2 focus:ring-red-500 outline-none 
                    transition-all text-white placeholder-red-300/50
                    ${errors.phone ? "border-red-500" : "border-red-800/50"}`}
                  placeholder="+1 (234) 567-8900"
                />
                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-red-400" />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-red-200 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-red-900/30 border rounded-md focus:ring-2 focus:ring-red-500 outline-none 
                  transition-all text-white placeholder-red-300/50
                  ${errors.subject ? "border-red-500" : "border-red-800/50"}`}
                placeholder="How can we help?"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-red-200 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-2 bg-red-900/30 border rounded-md focus:ring-2 focus:ring-red-500 outline-none 
                  transition-all text-white placeholder-red-300/50 resize-none
                  ${errors.message ? "border-red-500" : "border-red-800/50"}`}
                placeholder="Your message here..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-800 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md 
                transition-colors flex items-center justify-center space-x-2 disabled:bg-red-800
                disabled:cursor-not-allowed border border-red-600 hover:border-red-500"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
