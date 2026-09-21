'use client';

import { useActionState } from 'react';
import { sendEmail } from "../action";

export default function Form() {
    const [state, formAction, isPending] = useActionState(sendEmail, null);

    return (
        <section className="max-w-2xl mx-auto px-6 py-20 text-center">
            <form action={formAction} className="max-w-md mx-auto p-6 bg-[#161F30] rounded-xl space-y-4 border-b shadow-2xl">
                <h2 className="text-2xl font-bold text-[#F3F4F6] mb-6">Get in touch</h2>
                <div>
                    <label className="block text-sm font-light text-[#F3F4F6] mb-3">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-3 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your full name"
                    />
                </div>

                <div>
                    <label className="block text-sm font-light text-[#F3F4F6] mb-3">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-3 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="your@email.com"
                    />
                </div>

                <div>
                    <label className="block text-sm font-light text-[#F3F4F6] mb-3">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        required
                        className="w-full px-3 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Question about your order"
                    />
                </div>

                <div>
                    <label className="block text-sm font-light text-[#F3F4F6] mb-3">Message</label>
                    <textarea
                        name="message"
                        required
                        className="w-full px-3 py-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Content"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full relative group overflow-hidden rounded-lg p-px focus:outline-none focus:ring-2 focus:ring-[#00F5FF]/50 disabled:opacity-50"
                >
                    <span className="absolute inset-0 bg-linear-to-r from-[#00F5FF] to-[#39FF14] rounded-lg opacity-70 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative flex items-center justify-center w-full px-4 py-2.5 bg-[#161F30] rounded-[7px] text-[#F3F4F6] font-medium transition-all duration-300">
                        {isPending ? "Sending..." : "Send Message"}
                    </span>
                </button>

                {state?.success === true && (
                    <p className="text-sm text-green-400 mt-2">{state.message}</p>
                )}
                {state?.success === false && (
                    <p className="text-sm text-red-400 mt-2">{state.message}</p>
                )}
            </form>
        </section>
    );
}