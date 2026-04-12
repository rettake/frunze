"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setSendError(false);
    setSendSuccess(false);

    if (form.current) {
      emailjs
        .sendForm(
            "service_nhdke2d", // Замените на ваш Service ID
          "template_o9zfz4k", // Замените на ваш Template ID
          form.current,
          "F6RZLfANJRfOeJy4-", // Замените на ваш Public Key
        )
        .then(
          () => {
            setSendSuccess(true);
            setIsSending(false);
            form.current?.reset();
          },
          (error) => {
            setSendError(true);
            setIsSending(false);
            console.log("FAILED...", error.text);
          },
        );
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Левая колонка — контент */}
          <div
            className="transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              Контакты
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight">
              Давайте создадим
              <br />
              <span className="text-muted-foreground">что-то крутое</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Есть идея проекта? Мы будем рады обсудить её. Напишите нам, и
              давайте разберёмся, как мы можем помочь.
            </p>

            {/* Контактная информация */}
            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Локация</p>
                  <p className="text-foreground">Санкт-Петербург, Россия</p>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка — форма */}
          <div
            className="transition-all duration-1000 delay-200"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Имя
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="from_name"
                    className="w-full px-4 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                    placeholder="Иван"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Фамилия
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="from_last_name"
                    className="w-full px-4 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                    placeholder="Иванов"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  className="w-full px-4 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                  placeholder="ivan@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Тип проекта
                </label>
                <select
                  id="project"
                  name="project_type"
                  className="w-full px-4 py-4 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                >
                  <option value="">Выберите тип проекта</option>
                  <option value="website">Дизайн сайта</option>
                  <option value="webapp">Веб-приложение</option>
                  <option value="ecommerce">Интернет-магазин</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Расскажите о вашем проекте..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 disabled:opacity-50"
              >
                {isSending ? "Отправка..." : "Отправить сообщение"}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              {sendSuccess && (
                <p className="text-green-500">Сообщение успешно отправлено!</p>
              )}
              {sendError && (
                <p className="text-red-500">
                  Ошибка при отправке. Попробуйте еще раз.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}