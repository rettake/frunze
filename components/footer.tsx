import Link from "next/link";

const footerLinks = {
  company: [
    { label: "О нас", href: "#about" },
    { label: "Проекты", href: "#projects" },
    { label: "Услуги", href: "#services" },
    // { label: "Карьера", href: "#" },
  ],
  resources: [
    { label: "Блог", href: "#" },
    { label: "Кейсы", href: "#" },
    { label: "Вопросы и ответы", href: "#" },
    { label: "Поддержка", href: "#" },
  ],
  social: [
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Бренд */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight text-foreground"
            >
              Frunze Solutions
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Премиальная веб-студия, создающая выдающиеся цифровые продукты и
              пользовательский опыт.
            </p>
          </div>

          {/* Компания */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Компания</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ресурсы */}
          {/*<div>*/}
          {/*  <h3 className="text-sm font-semibold text-foreground">Ресурсы</h3>*/}
          {/*  <ul className="mt-4 space-y-3">*/}
          {/*    {footerLinks.resources.map((link) => (*/}
          {/*      <li key={link.label}>*/}
          {/*        <Link*/}
          {/*          href={link.href}*/}
          {/*          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"*/}
          {/*        >*/}
          {/*          {link.label}*/}
          {/*        </Link>*/}
          {/*      </li>*/}
          {/*    ))}*/}
          {/*  </ul>*/}
          {/*</div>*/}

          {/* Соцсети */}
          {/*<div>*/}
          {/*  <h3 className="text-sm font-semibold text-foreground">Связаться</h3>*/}
          {/*  <ul className="mt-4 space-y-3">*/}
          {/*    {footerLinks.social.map((link) => (*/}
          {/*      <li key={link.label}>*/}
          {/*        <Link*/}
          {/*          href={link.href}*/}
          {/*          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"*/}
          {/*        >*/}
          {/*          {link.label}*/}
          {/*        </Link>*/}
          {/*      </li>*/}
          {/*    ))}*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>

        {/* Нижняя часть */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Frunze Solutions. Все права защищены.
          </p>
          {/*<div className="flex items-center gap-6">*/}
          {/*  <Link*/}
          {/*    href="#"*/}
          {/*    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"*/}
          {/*  >*/}
          {/*    Политика конфиденциальности*/}
          {/*  </Link>*/}
          {/*  <Link*/}
          {/*    href="#"*/}
          {/*    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"*/}
          {/*  >*/}
          {/*    Условия использования*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </div>
      </div>
    </footer>
  );
}
