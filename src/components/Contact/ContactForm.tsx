import { useState } from 'react';

interface ContactFormProps {
    isPortuguese: boolean;
}

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    budget: string;
    timeline: string;
}

export const ContactForm = ({ isPortuguese }: ContactFormProps) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        timeline: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name.trim()) {
            newErrors.name = isPortuguese ? 'Nome é obrigatório' : 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = isPortuguese ? 'Email é obrigatório' : 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = isPortuguese ? 'Email inválido' : 'Invalid email';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = isPortuguese ? 'Assunto é obrigatório' : 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = isPortuguese ? 'Mensagem é obrigatória' : 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
                budget: '',
                timeline: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl p-8 border border-[#208FBB]/30 text-center">
                <div className="text-6xl mb-6">🎉</div>
                <h3 className="text-2xl font-bold text-[#208FBB] mb-4">
                    {isPortuguese ? 'Mensagem Enviada!' : 'Message Sent!'}
                </h3>
                <p className="text-[#D0D8EA] mb-6">
                    {isPortuguese
                        ? 'Obrigado pelo seu contato! Responderei em breve.'
                        : 'Thank you for your message! I\'ll get back to you soon.'
                    }
                </p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#208FBB] hover:bg-[#1A7A9A] text-white py-2 px-6 rounded-lg transition-colors duration-300"
                >
                    {isPortuguese ? 'Enviar Nova Mensagem' : 'Send New Message'}
                </button>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl p-8 border border-[#2E3B63]/50">
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#208FBB] mb-2">
                    {isPortuguese ? 'Envie uma Mensagem' : 'Send a Message'}
                </h3>
                <p className="text-[#B1BDDF]">
                    {isPortuguese
                        ? 'Preencha o formulário abaixo e entrarei em contato em até 24 horas'
                        : 'Fill out the form below and I\'ll get back to you within 24 hours'
                    }
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-[#D0D8EA] font-semibold mb-2">
                            {isPortuguese ? 'Nome *' : 'Name *'}
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full bg-[#0A1428] border ${errors.name ? 'border-red-500' : 'border-[#2E3B63]'
                                } rounded-lg px-4 py-3 text-[#D0D8EA] focus:border-[#208FBB] focus:outline-none transition-colors duration-300`}
                            placeholder={isPortuguese ? 'Seu nome completo' : 'Your full name'}
                        />
                        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block text-[#D0D8EA] font-semibold mb-2">
                            {isPortuguese ? 'Email *' : 'Email *'}
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full bg-[#0A1428] border ${errors.email ? 'border-red-500' : 'border-[#2E3B63]'
                                } rounded-lg px-4 py-3 text-[#D0D8EA] focus:border-[#208FBB] focus:outline-none transition-colors duration-300`}
                            placeholder={isPortuguese ? 'seu@email.com' : 'your@email.com'}
                        />
                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>
                </div>

                {/* Subject */}
                <div>
                    <label className="block text-[#D0D8EA] font-semibold mb-2">
                        {isPortuguese ? 'Assunto *' : 'Subject *'}
                    </label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full bg-[#0A1428] border ${errors.subject ? 'border-red-500' : 'border-[#2E3B63]'
                            } rounded-lg px-4 py-3 text-[#D0D8EA] focus:border-[#208FBB] focus:outline-none transition-colors duration-300`}
                        placeholder={isPortuguese ? 'Sobre o que você gostaria de falar?' : 'What would you like to talk about?'}
                    />
                    {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                </div>

                {/* Budget and Timeline Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-[#D0D8EA] font-semibold mb-2">
                            {isPortuguese ? 'Orçamento' : 'Budget'}
                        </label>
                        <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full bg-[#0A1428] border border-[#2E3B63] rounded-lg px-4 py-3 text-[#D0D8EA] focus:border-[#208FBB] focus:outline-none transition-colors duration-300"
                        >
                            <option value="">{isPortuguese ? 'Selecione uma faixa' : 'Select a range'}</option>
                            <option value="under-5k">{isPortuguese ? 'Até R$ 5.000' : 'Under $1,000'}</option>
                            <option value="5k-15k">{isPortuguese ? 'R$ 5.000 - R$ 15.000' : '$1,000 - $3,000'}</option>
                            <option value="15k-30k">{isPortuguese ? 'R$ 15.000 - R$ 30.000' : '$3,000 - $6,000'}</option>
                            <option value="30k-plus">{isPortuguese ? 'Acima de R$ 30.000' : '$6,000+'}</option>
                            <option value="discuss">{isPortuguese ? 'Vamos conversar' : 'Let\'s discuss'}</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-[#D0D8EA] font-semibold mb-2">
                            {isPortuguese ? 'Prazo' : 'Timeline'}
                        </label>
                        <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full bg-[#0A1428] border border-[#2E3B63] rounded-lg px-4 py-3 text-[#D0D8EA] focus:border-[#208FBB] focus:outline-none transition-colors duration-300"
                        >
                            <option value="">{isPortuguese ? 'Quando precisa?' : 'When do you need it?'}</option>
                            <option value="asap">{isPortuguese ? 'O mais rápido possível' : 'ASAP'}</option>
                            <option value="1-month">{isPortuguese ? 'Em 1 mês' : 'Within 1 month'}</option>
                            <option value="2-3-months">{isPortuguese ? 'Em 2-3 meses' : 'Within 2-3 months'}</option>
                            <option value="flexible">{isPortuguese ? 'Flexível' : 'Flexible'}</option>
                        </select>
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label className="block text-[#D0D8EA] font-semibold mb-2">
                        {isPortuguese ? 'Mensagem *' : 'Message *'}
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full bg-[#0A1428] border ${errors.message ? 'border-red-500' : 'border-[#2E3B63]'
                            } rounded-lg px-4 py-3 text-[#D0D8EA] focus:border-[#208FBB] focus:outline-none transition-colors duration-300 resize-none`}
                        placeholder={isPortuguese
                            ? 'Conte-me sobre seu projeto, suas necessidades e objetivos...'
                            : 'Tell me about your project, your needs and goals...'
                        }
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#208FBB] hover:bg-[#1A7A9A] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg"
                >
                    {isSubmitting ? (
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            {isPortuguese ? 'Enviando...' : 'Sending...'}
                        </div>
                    ) : (
                        <>
                            {isPortuguese ? 'Enviar Mensagem' : 'Send Message'}
                            <span className="ml-2">🚀</span>
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};
