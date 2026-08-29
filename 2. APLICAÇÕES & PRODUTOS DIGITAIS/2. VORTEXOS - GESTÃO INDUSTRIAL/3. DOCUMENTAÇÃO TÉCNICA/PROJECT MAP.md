# VortexID — Project Map

> **Última atualização**: 2026-03-01
> Este documento serve como referência rápida para agentes de IA e desenvolvedores, indicando exatamente onde encontrar cada parte do projeto.

---

## 📁 Visão Geral da Estrutura

```
VortexID/
│
├── .agents/                          → Configurações e workflows para agentes de IA
│   └── workflows/
│       └── build-and-verify.md       → Workflow para compilar e verificar o projeto
│
├── src/
│   ├── App.tsx                       → Roteador principal (todas as rotas vivem aqui)
│   ├── main.tsx                      → Entry point do React
│   ├── index.css                     → Estilos globais + variáveis CSS
│   ├── vite-env.d.ts                 → Declarações de tipo do Vite
│   │
│   ├── apps/                         → 🏢 Cada app em sua pasta isolada
│   │   ├── portal/                   → Landing page + páginas institucionais
│   │   ├── vision/                   → VortexVision (manutenção industrial)
│   │   ├── om/                       → VortexOM (ordens de manutenção)
│   │   ├── rh/                       → VortexRH (recursos humanos)
│   │   └── sm/                       → VortexSM (social/comunicação interna)
│   │
│   ├── shared/                       → 🔗 Componentes compartilhados entre apps
│   │   ├── ui/                       → Componentes shadcn/ui (NÃO EDITAR DIRETAMENTE)
│   │   ├── layout/                   → Header, ProtectedRoute, DataPrefetcher, Tour
│   │   ├── contexts/                 → AuthContext, ThemeContext, TourContext
│   │   ├── hooks/                    → Hooks globais (use-mobile, use-toast, useGlobalSearch)
│   │   ├── settings/                 → SystemPreferences
│   │   └── auth/                     → RequestAccessForm
│   │
│   ├── lib/                          → 🛠️ Utilitários e helpers puros
│   │   ├── utils.ts                  → cn() e funções gerais
│   │   ├── dateUtils.ts              → Formatação de datas
│   │   ├── chartColors.ts            → Paleta de cores para gráficos
│   │   ├── kpiColors.ts              → Cores de KPIs
│   │   ├── sectorUtils.ts            → Mapeamento de setores
│   │   ├── operationalEnums.ts       → Enums operacionais
│   │   ├── asset-utils.ts            → Funções de ativos
│   │   └── tourSteps.ts              → Definição dos passos do Tour
│   │
│   └── integrations/                 → 🔌 Integrações externas
│       └── supabase/
│           ├── client.ts             → Cliente Supabase (import daqui!)
│           ├── types.ts              → Tipos gerados do banco de dados
│           ├── customTypes.ts        → Tipos customizados
│           ├── utilityTypes.ts       → Tipos utilitários
│           ├── schema.ts             → Schema helper
│           └── assetMigration.ts     → Script de migração de ativos
│
├── supabase/                         → ☁️ Backend (Supabase Cloud)
│   ├── config.toml                   → Config do Supabase CLI
│   ├── functions/                    → Edge Functions (serverless)
│   │   ├── apply-maintenance-import/ → Importação de dados de manutenção
│   │   ├── gemini-chat/              → Chat com Gemini AI
│   │   ├── generate-dashboard-pdf/   → Geração de PDFs do dashboard
│   │   ├── generate-simple-pdf/      → Geração de PDFs simples
│   │   ├── validate-maintenance-import/ → Validação de importação
│   │   ├── vortex-account-manager/   → Gerenciamento de contas
│   │   ├── vortex-builder/           → Builder de páginas
│   │   ├── vortex-chat/              → Chat em tempo real
│   │   └── vortex-insight-generator/ → Gerador de insights por IA
│   └── migrations/                   → Migrações SQL do banco de dados
│
├── public/                           → Arquivos estáticos
│   ├── favicon.ico
│   ├── robots.txt
│   └── assets/                       → Imagens e SVGs
│
├── android/                          → Build Capacitor Android
├── ios/                              → Build Capacitor iOS
│
├── PROJECT_MAP.md                    → 📋 ESTE ARQUIVO
├── AI_RULES.md                       → 📋 Regras e stack para agentes de IA
├── README.md                         → Documentação do projeto
│
├── package.json                      → Dependências e scripts
├── vite.config.ts                    → Config do Vite (alias @ → ./src)
├── tailwind.config.ts                → Config do Tailwind CSS
├── tsconfig.json                     → Config do TypeScript
├── tsconfig.app.json                 → Config TS para o app
├── tsconfig.node.json                → Config TS para node
├── postcss.config.js                 → Config do PostCSS
├── eslint.config.js                  → Config do ESLint
├── capacitor.config.ts               → Config do Capacitor
├── components.json                   → Config do shadcn/ui
├── index.html                        → HTML raiz (entry point)
└── .env                              → Variáveis de ambiente (NÃO COMMITAR)
```

---

## 🏢 Detalhes dos Apps

### `src/apps/portal/` — Portal Institucional
O ponto de entrada público do VortexID. Contém a landing page, páginas de apresentação dos produtos, e páginas institucionais (sobre, contato, carreiras, etc.).

| Pasta | Conteúdo |
|-------|----------|
| `pages/` | LandingPage, AppsPortal, Auth, NotFound, Help, Profile, About, Careers, Blog, Contact, Status, Cookies, Privacy, Terms, ApiDocs |
| `components/landing/` | Hero, Header, Footer, CTA, Security, Ecosystem, AI Core, Connections, Chat, About section |
| `products/` | Landing pages de produto: VisionPage, OmPage, SmPage |

### `src/apps/vision/` — VortexVision
Sistema de gestão de manutenção industrial. Dashboard com KPIs, disponibilidade de ativos, índices operacionais.

| Pasta | Conteúdo |
|-------|----------|
| `pages/` | Dashboard, Manutencao, IndicesOperacionais, DisponibilidadeAtivos, Configuracoes |
| `components/dashboard/` | KpiBar, PlantHealthCard, SectorRanking, SafetyCounters, WorkOrders |
| `components/manutencao/` | DisponibilidadeAtivos, IndicesGerais + subpastas (disponibilidade/, indices-gerais/) |
| `components/operacional/` | Tabs operacionais (S5, Retrabalho, Horas Extras, Produtividade, Atestados) |
| `hooks/` | useDashboardData, useMaintenanceMetrics, useBulkRecordManagement, etc. (16 hooks) |

### `src/apps/om/` — VortexOM
Sistema de ordens de manutenção (CMMS). Gerência ativos, solicitações de serviço, ordens de trabalho, estoque e calendário.

| Pasta | Conteúdo |
|-------|----------|
| `pages/` | AuthOM, OMDashboard, OMAssets, OMRequests, OMWorkOrders, OMApontamentos, OMInventory, OMCalendar, OMSettings |
| `components/` | layout/ (OMLayout, OMSidebar, OMHeader), assets/, orders/, requests/, inventory/, print/ |

### `src/apps/rh/` — VortexRH
Sistema de gestão de recursos humanos. Colaboradores, absenteísmo, treinamentos, recrutamento, auditoria.

| Pasta | Conteúdo |
|-------|----------|
| `pages/` | RHDashboard, RHColaboradores, RHAbsenteismo, RHTreinamentos, RHRecrutamento, RHAuditLogs |
| `components/` | layout/ (RHLayout, RHSidebar, RHHeader), absenteismo/, colaboradores/, recrutamento/, treinamentos/ |

### `src/apps/sm/` — VortexSM
Rede social corporativa interna. Feed, DDS (Diálogos de Segurança), Wiki, Eventos, Perfil.

| Pasta | Conteúdo |
|-------|----------|
| `pages/` | SMFeed, SMDDS, SMWiki, SMEvents, SMConfig, SMProfile |
| `components/` | layout/ (SMLayout, SMHeader), feed/ (FeedHeader, PostCard) |

---

## 🔗 Rotas Principais (definidas em `App.tsx`)

| Rota | App | Componente | Público? |
|------|-----|-----------|----------|
| `/portal` | Portal | LandingPage | ✅ Sim |
| `/hub` | Portal | AppsPortal | ✅ Sim |
| `/vision` | Portal | VisionPage (landing) | ✅ Sim |
| `/om-product` | Portal | OmPage (landing) | ✅ Sim |
| `/sm-product` | Portal | SmPage (landing) | ✅ Sim |
| `/sobre`, `/carreiras`, `/blog`, `/contato`, `/status`, `/cookies` | Portal | Institucionais | ✅ Sim |
| `/privacidade`, `/termos` | Portal | Legais | ✅ Sim |
| `/api-docs` | Portal | ApiDocsPage | ✅ Sim |
| `/auth` | Portal | Auth (login Vision) | ✅ Sim |
| `/auth-om` | OM | AuthOM (login OM) | ✅ Sim |
| `/` | Vision | Dashboard | 🔒 Protegida |
| `/manutencao` | Vision | Manutencao | 🔒 Protegida |
| `/indices-operacionais` | Vision | IndicesOperacionais | 🔒 Protegida |
| `/configuracoes` | Vision | Configuracoes | 🔒 Protegida |
| `/ajuda` | Vision | HelpPage | 🔒 Protegida |
| `/om/*` | OM | OMLayout + subpages | 🔒 Protegida |
| `/rh/*` | RH | RHLayout + subpages | 🔒 Protegida |
| `/sm/*` | SM | SMLayout + subpages | 🔒 Protegida |

---

## 📐 Convenções de Nomenclatura

| Item | Padrão | Exemplo |
|------|--------|---------|
| Páginas | `PascalCase.tsx` | `Dashboard.tsx`, `OMAssets.tsx` |
| Componentes | `PascalCase.tsx` | `KpiBar.tsx`, `PlantHealthCard.tsx` |
| Hooks | `camelCase.ts` prefixado com `use` | `useDashboardData.ts` |
| Utilitários | `camelCase.ts` | `dateUtils.ts`, `chartColors.ts` |
| Contextos | `PascalCase.tsx` sufixado com `Context` | `AuthContext.tsx` |
| Pastas de app | `kebab-case` ou `camelCase` | `portal/`, `vision/`, `om/` |
| Subpastas de features | `kebab-case` | `indices-gerais/`, `disponibilidade/` |

---

## 🔧 Como Importar

```typescript
// UI Components (shadcn)
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";

// Layout
import Header from "@/shared/layout/Header";
import ProtectedRoute from "@/shared/layout/ProtectedRoute";

// Contexts
import { AuthProvider } from "@/shared/contexts/AuthContext";

// Hooks compartilhados
import { useToast } from "@/shared/hooks/use-toast";
import { useIsMobile } from "@/shared/hooks/use-mobile";

// Hooks específicos do Vision
import { useDashboardData } from "@/apps/vision/hooks/useDashboardData";

// Utilitários
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/dateUtils";

// Supabase
import { supabase } from "@/integrations/supabase/client";

// Componentes de app específico
import KpiBar from "@/apps/vision/components/dashboard/KpiBar";
import OMLayout from "@/apps/om/components/layout/OMLayout";
```

---

## ⚠️ Regras Importantes

1. **NÃO editar** arquivos em `shared/ui/` diretamente — são componentes shadcn/ui  
2. **Sempre usar** o alias `@/` para imports (nunca caminhos relativos saindo do app)  
3. **Supabase client** → importar SEMPRE de `@/integrations/supabase/client`  
4. **Novo hook** → colocar em `apps/<app>/hooks/` se for específico, ou `shared/hooks/` se for global  
5. **Novo componente** → colocar na pasta do app correspondente, na subpasta correta  
6. **Rotas** → TODAS definidas em `src/App.tsx`, nunca em arquivos separados  
