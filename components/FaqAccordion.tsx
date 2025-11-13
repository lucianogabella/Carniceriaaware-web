import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

const faqs = [
    {
        question: '¿Cuál es el origen de su carne?',
        answer: 'Toda nuestra carne proviene de ganado de producción propia, criado a campo con una terminación final en corral para garantizar su terneza y sabor únicos. Nos enorgullecemos de controlar todo el proceso, desde la cría hasta el corte final.'
    },
    {
        question: '¿Cómo funciona el envío a domicilio?',
        answer: 'Realizamos envíos en camiones refrigerados para mantener la cadena de frío. Cubrimos zonas desde Santa Fe hasta C.A.B.A. y Zona Norte. Una vez que realizas tu pedido, coordinamos la entrega para que recibas tus productos en la puerta de tu casa.'
    },
    {
        question: '¿Puedo hacer pedidos mayoristas?',
        answer: '¡Claro que sí! Ofrecemos precios y condiciones especiales para compras mayoristas. Por favor, ponete en contacto con nuestro equipo de ventas a través de la sección "Mayorista" para recibir una cotización personalizada.'
    },
    {
        question: '¿Qué métodos de pago aceptan?',
        answer: 'Aceptamos una amplia variedad de métodos de pago, incluyendo tarjetas de crédito y débito, transferencias bancarias y Mercado Pago. Todas las transacciones son 100% seguras.'
    }
];

const AccordionItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void; }> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-stone-200">
            <button
                className="w-full flex justify-between items-center text-left py-4 px-2"
                onClick={onClick}
            >
                <span className="font-semibold text-stone-800">{question}</span>
                <ChevronDownIcon className={`w-5 h-5 text-stone-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <p className="text-stone-600 pb-4 px-2">{answer}</p>
            </div>
        </div>
    );
};


export const FaqAccordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="my-16">
             <div className="text-center mb-10">
                <h2 className="text-3xl font-serif font-bold text-stone-800">Preguntas Frecuentes</h2>
                <p className="mt-2 text-stone-600 max-w-2xl mx-auto">Resolvé tus dudas más comunes sobre nuestros productos y servicios.</p>
            </div>
            <div className="max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-sm border border-stone-200">
                {faqs.map((faq, index) => (
                    <AccordionItem 
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                    />
                ))}
            </div>
        </section>
    );
};
