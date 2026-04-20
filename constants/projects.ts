import umca from "@/assets/images/umca.png";
import beteco from "@/assets/images/beteco.png";
import easect from "@/assets/images/easect.png";
import dashboard from "@/assets/images/dashboard.png";
import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  color: string;
  image: StaticImageData;
  technologies: string[];
  features: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "umca-crm",
    title: "UMCA CRM",
    category: "Веб-приложение",
    description:
      "CRM-система для управления лидами с интеграцией Telegram-ботов, автоматизацией обработки заявок и централизованной работой с клиентами.",
    fullDescription:
      "Комплексное решение для автоматизации процессов продаж и взаимодействия с клиентами. Система объединяет входящие заявки из различных каналов, включая Telegram-ботов, обеспечивая менеджерам единое окно для работы. Реализована гибкая система статусов, аналитика эффективности и автоматические уведомления.",
    color: "from-blue-500/20 to-cyan-500/20",
    image: umca,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Telegram API",
    ],
    features: [
      "Интеграция с Telegram",
      "Автоматизация воронок",
      "Аналитика в реальном времени",
      "Управление ролями",
    ],
  },
  {
    id: 2,
    slug: "beteco",
    title: "Beteco",
    category: "Корпоративный сайт",
    description:
      "Сайт для производства изделий из архитектурного бетона с каталогом работ, акцентом на визуал и удобной навигацией для привлечения клиентов.",
    fullDescription:
      "Премиальный корпоративный сайт для компании Beteco. Проект ориентирован на визуальную презентацию изделий из архитектурного бетона. Мы разработали интерактивный каталог, систему фильтрации проектов и оптимизировали производительность для быстрой загрузки высококачественных изображений.",
    color: "from-amber-500/20 to-orange-500/20",
    image: beteco,
    technologies: [
      "React",
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "Sanity CMS",
    ],
    features: [
      "Галерея высокого разрешения",
      "Адаптивный дизайн",
      "Интерактивная карта",
      "Формы обратной связи",
    ],
  },
  {
    id: 3,
    slug: "media-dashboard",
    title: "Media Dashboard",
    category: "Веб-приложение",
    description:
      "Платформа для управления медиа-сайтами: редактирование контента, аналитика, публикации и контроль нескольких проектов в одном интерфейсе.",
    fullDescription:
      "Профессиональный инструмент для редакторов и владельцев медиа-ресурсов. Dashboard позволяет управлять десятками сайтов из одного интерфейса, планировать публикации, отслеживать метрики вовлеченности в реальном времени и управлять правами доступа авторов.",
    color: "from-emerald-500/20 to-teal-500/20",
    image: dashboard,
    technologies: [
      "Next.js",
      "TanStack Query",
      "Recharts",
      "Lucide Icons",
      "Tailwind CSS",
    ],
    features: [
      "Мультиканальность",
      "Сложная аналитика",
      "Редактор контента",
      "SEO инструменты",
    ],
  },
  {
    id: 4,
    slug: "easect",
    title: "Easect",
    category: "Продукт / SaaS",
    description:
      "Электронное меню для ресторанов с удобным управлением блюдами, категориями и быстрым доступом для клиентов через QR-коды.",
    fullDescription:
      "Инновационная SaaS-платформа для ресторанного бизнеса. Easect предоставляет владельцам заведений возможность за считанные минуты создать цифровое меню, которое доступно гостям по QR-коду. Система поддерживает мгновенное обновление цен, управление стопами и интеграцию с системами учета.",
    color: "from-rose-500/20 to-pink-500/20",
    image: easect,
    technologies: [
      "Next.js",
      "Prisma",
      "AWS",
      "QR Code Generation",
      "React Hook Form",
    ],
    features: [
      "Генерация QR-кодов",
      "Управление меню",
      "Мгновенные обновления",
      "Адаптация под бренд",
    ],
  },
];
