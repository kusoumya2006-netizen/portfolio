import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, FileText, Send, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react'
import { PROFILE } from '../../data/portfolio'

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs: { [key: string]: string } = {}
    if (!formState.name.trim()) errs.name = 'Please provide your name.'
    if (!formState.email.trim()) {
      errs.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!formState.message.trim()) {
      errs.message = 'Please provide a message or inquiry.'
    } else if (formState.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      // Functional mailto fallback without faking backend delivery
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`)
      const body = encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )
      window.location.href = `mailto:${PROFILE.contact.email}?subject=${subject}&body=${body}`
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 relative matrix-dots">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-sage/30 text-xs font-mono uppercase text-sage mb-4">
            <Send size={12} />
            <span>Direct Inquiries & Collaboration</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-ivory tracking-tight mb-4 flex items-center gap-3">
            <span>OPEN FOR WHAT'S NEXT</span>
            <span className="text-sage italic">↗</span>
          </h2>

          <p className="text-ivory/60 text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
            Creative collaborations · Engineering opportunities · Technology internships.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT — Direct Communication Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="glass-card rounded-3xl p-8 border border-sage/20 space-y-6">
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl glass-panel border border-sage/30 flex items-center justify-center shrink-0 text-sage">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-ivory/40 mb-1">Direct Email</p>
                  <a
                    href={`mailto:${PROFILE.contact.email}`}
                    className="text-ivory hover:text-sage font-medium text-base transition-colors"
                  >
                    {PROFILE.contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl glass-panel border border-sage/30 flex items-center justify-center shrink-0 text-sage">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-ivory/40 mb-1">Phone</p>
                  <a
                    href={`tel:${PROFILE.contact.phone}`}
                    className="text-ivory hover:text-sage font-mono text-base transition-colors"
                  >
                    {PROFILE.contact.phone}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl glass-panel border border-sage/30 flex items-center justify-center shrink-0 text-sage">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-ivory/40 mb-1">LinkedIn</p>
                  <a
                    href={PROFILE.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ivory hover:text-sage font-medium text-base transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>soumyakumar-dev</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl glass-panel border border-sage/30 flex items-center justify-center shrink-0 text-sage">
                  <Github size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-ivory/40 mb-1">GitHub</p>
                  <a
                    href={PROFILE.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ivory hover:text-sage font-mono text-base transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{PROFILE.contact.githubUsername}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

            </div>

            {/* Resume Download Card */}
            <div className="glass-card rounded-3xl p-8 border border-sage/30 bg-gradient-to-br from-pine to-[#101b17] flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-sage mb-2">Verified Credential</p>
                <h4 className="font-display text-2xl text-ivory font-bold mb-2">General Professional Resume</h4>
                <p className="text-ivory/70 text-xs font-sans leading-relaxed mb-6">
                  Standard general resume PDF (Soumya_K_Resume_Updated_CONVERA(2).pdf) reflecting software engineering projects, UI/UX experience and academic milestones.
                </p>
              </div>

              <a
                href={PROFILE.contact.resume}
                download="Soumya_K_Resume_Updated_CONVERA(2).pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-sage text-pine font-semibold text-sm hover:bg-sage/90 transition-all shadow-lg"
              >
                <FileText size={16} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

          </div>

          {/* RIGHT — Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-sage/20">
              
              <h3 className="font-display text-2xl text-ivory font-bold mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs font-mono text-ivory/50 mb-8">
                Inquiries will automatically populate your email client with verified parameters.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-pine/90 border border-sage/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-sage/20 text-sage mx-auto flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-display text-2xl text-ivory font-bold">Mail Client Triggered</h4>
                  <p className="text-ivory/70 text-sm max-w-md mx-auto font-sans leading-relaxed">
                    Thank you! Your default mail client has been opened with your inquiry prepared for <span className="text-sage font-mono">{PROFILE.contact.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormState({ name: '', email: '', message: '' })
                    }}
                    className="mt-4 text-xs font-mono uppercase tracking-widest text-sage hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-ivory/70 mb-2">
                      Your Name <span className="text-sage">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formState.name}
                      onChange={e => {
                        setFormState({ ...formState, name: e.target.value })
                        if (errors.name) setErrors({ ...errors, name: '' })
                      }}
                      placeholder="e.g. Alex Henderson"
                      className="w-full px-4 py-3.5 rounded-xl bg-pine/70 border border-sage/25 text-ivory placeholder-ivory/30 text-sm focus:outline-none focus:border-sage transition-colors font-sans"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs font-mono mt-1.5 flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-ivory/70 mb-2">
                      Email Address <span className="text-sage">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={e => {
                        setFormState({ ...formState, email: e.target.value })
                        if (errors.email) setErrors({ ...errors, email: '' })
                      }}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-pine/70 border border-sage/25 text-ivory placeholder-ivory/30 text-sm focus:outline-none focus:border-sage transition-colors font-sans"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs font-mono mt-1.5 flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase text-ivory/70 mb-2">
                      Message / Project Details <span className="text-sage">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formState.message}
                      onChange={e => {
                        setFormState({ ...formState, message: e.target.value })
                        if (errors.message) setErrors({ ...errors, message: '' })
                      }}
                      placeholder="Tell me about your team, internship opportunity or project collaboration..."
                      className="w-full px-4 py-3.5 rounded-xl bg-pine/70 border border-sage/25 text-ivory placeholder-ivory/30 text-sm focus:outline-none focus:border-sage transition-colors font-sans resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs font-mono mt-1.5 flex items-center gap-1">
                        <AlertCircle size={12} />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-sage text-pine font-semibold text-sm hover:bg-sage/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-sage/10"
                  >
                    <Send size={15} />
                    <span>Send Inquiry Message</span>
                  </button>

                  <p className="text-[11px] font-mono text-ivory/40 text-center">
                    Direct mailto dispatch · No hidden third-party analytics
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
