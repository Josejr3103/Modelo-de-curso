# 📈 Curso Completo de Economia - Investimentos de Renda Fixa

Um curso abrangente e interativo sobre investimentos de renda fixa no Brasil, desenvolvido com tecnologias web modernas para proporcionar uma experiência de aprendizado completa e envolvente.

## 🎯 Sobre o Projeto

Este projeto apresenta um **curso completo de economia** focado em **investimentos de renda fixa**, cobrindo desde conceitos básicos até análises avançadas. O curso é estruturado em 14 módulos com 87 aulas, totalizando mais de 50 horas de conteúdo prático e teórico.

### 📊 Estatísticas do Curso
- **14 Módulos** estruturados
- **87 Aulas** detalhadas
- **50+ Horas** de conteúdo
- **15 Cases** práticos
- **3 Níveis** de dificuldade (Básico, Intermediário, Avançado)

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Design responsivo com gradientes e animações
- **JavaScript** - Interatividade e funcionalidades dinâmicas
- **Design Responsivo** - Otimizado para desktop, tablet e mobile

## 📚 Estrutura do Curso

### Módulos Principais

1. **📚 Fundamentos Econômicos** - Conceitos básicos e matemática financeira
2. **🏛️ CDB** - Certificados de Depósito Bancário
3. **🏠 LCI** - Letras de Crédito Imobiliário
4. **🌾 LCA** - Letras de Crédito do Agronegócio
5. **🏢 CRI** - Certificados de Recebíveis Imobiliários
6. **🚜 CRA** - Certificados de Recebíveis do Agronegócio
7. **💰 Tributação Avançada** - Planejamento fiscal e otimização
8. **🏦 Tesouro Direto** - Títulos públicos federais
9. **⚠️ Análise de Risco** - Gestão de risco de crédito
10. **📊 Gestão de Portfólio** - Construção e otimização de carteiras
11. **🔄 Mercado Secundário** - Negociação e liquidez
12. **⚖️ Aspectos Legais** - Regulamentação e compliance
13. **🚀 Tendências** - Inovações e futuro dos investimentos
14. **💻 Módulo Prático** - Aplicação prática e cases reais

## 🎨 Características do Design

### Interface Moderna
- **Design responsivo** que se adapta a qualquer dispositivo
- **Gradientes coloridos** para diferenciação visual dos módulos
- **Animações suaves** para melhor experiência do usuário
- **Tipografia moderna** com hierarquia clara

### Funcionalidades Interativas
- **Módulos expansíveis** com animações de abertura/fechamento
- **Contador animado** para estatísticas do curso
- **Botão flutuante** para expandir/contrair todos os módulos
- **Tags coloridas** para categorização das aulas (duração, nível, tipo)

## 🎯 Metodologia de Ensino

### Abordagem Prática
- **70% aplicação prática** com cases reais do mercado brasileiro
- **Videoaulas HD** com slides interativos e animações
- **Exercícios práticos** ao final de cada módulo
- **Calculadoras personalizadas** para rentabilidade e tributação

### Recursos de Aprendizado
- **Mobile Learning** - Plataforma otimizada para estudo via celular
- **Suporte direto** - Chat e fórum com instrutores
- **Material complementar** - E-books, planilhas e templates
- **Simuladores avançados** de carteira e cenários econômicos

## 🎓 Perfil do Egresso

Ao final do curso, você será capaz de:

- ✅ **Dominar todos os produtos de renda fixa** (CDB, LCI, LCA, CRI, CRA, Tesouro Direto)
- ✅ **Analisar riscos de forma profissional** (Rating, análise fundamentalista, diversificação)
- ✅ **Construir carteiras otimizadas** (Asset allocation, rebalanceamento, gestão ativa)
- ✅ **Otimizar tributação** (Estratégias legais para reduzir impostos)
- ✅ **Operar com segurança** (Conhecimento completo de regulamentação)
- ✅ **Acompanhar tendências** (Atualizado com inovações do mercado)

## 🎁 Recursos Extras

- 📚 **Material Complementar** - E-books, planilhas Excel, templates de análise
- 📈 **Simuladores** - Ferramentas avançadas de simulação de carteira
- 💬 **Fórum de Discussão** - Comunidade exclusiva para dúvidas
- 📊 **Dashboard Pessoal** - Acompanhamento de portfólio em tempo real
- 🎯 **Mentoria Individual** - 3 sessões 1:1 com especialista
- 📧 **Newsletter Semanal** - Análises de mercado e oportunidades
- 🏆 **Certificado** - Reconhecimento de conclusão
- ♻️ **Atualizações Vitalícias** - Acesso permanente a atualizações

## 🚀 Como Executar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desenvolvimento)

### Instalação
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/Modelo-de-curso.git
```

2. Navegue até o diretório:
```bash
cd Modelo-de-curso
```

3. Abra o arquivo `index.html` em seu navegador:
```bash
# Opção 1: Abrir diretamente
open index.html

# Opção 2: Usar servidor local (recomendado)
python -m http.server 8000
# ou
npx serve .
```

### Estrutura de Arquivos
```
Modelo-de-curso/
├── index.html          # Página principal do curso
├── economics.css        # Estilos e design responsivo
├── economics.js         # Funcionalidades interativas
└── README.md           # Documentação do projeto
```

## 🎨 Personalização

### Modificando Cores
As cores dos módulos podem ser alteradas no arquivo `economics.css`:
```css
.modulo:nth-child(odd) .modulo-header {
    background: linear-gradient(135deg, #sua-cor-1, #sua-cor-2);
}
```

### Adicionando Novos Módulos
Para adicionar novos módulos, siga a estrutura HTML existente:
```html
<div class="modulo" onclick="toggleModulo(this)">
    <div class="modulo-header">
        <div>
            <h2><span class="icone">🎯</span> Novo Módulo</h2>
        </div>
        <div class="modulo-info">
            <span>X aulas</span>
            <span>XhXmin</span>
            <button class="toggle-btn">▼</button>
        </div>
    </div>
    <div class="modulo-content">
        <!-- Conteúdo das aulas -->
    </div>
</div>
```

## 📱 Responsividade

O projeto foi desenvolvido com foco em **mobile-first**, garantindo:
- **Design adaptativo** para todas as telas
- **Navegação intuitiva** em dispositivos móveis
- **Performance otimizada** para conexões lentas
- **Acessibilidade** seguindo padrões web

## 🔧 Funcionalidades JavaScript

### Principais Funções
- `toggleModulo()` - Expande/contrai módulos individuais
- `toggleAll()` - Expande/contrai todos os módulos
- **Animações de entrada** - Efeito cascata nos módulos
- **Contador animado** - Estatísticas com animação progressiva

### Recursos Interativos
- **Botão flutuante** para controle global dos módulos
- **Efeitos hover** em elementos interativos
- **Transições suaves** para melhor UX
- **Animações CSS** para engajamento visual

## 📈 Roadmap Futuro

### Próximas Funcionalidades
- [ ] **Sistema de progresso** - Tracking de aulas concluídas
- [ ] **Quiz interativo** - Testes de conhecimento
- [ ] **Calculadora integrada** - Ferramentas de cálculo
- [ ] **Modo escuro** - Alternativa de tema
- [ ] **PWA** - Aplicativo web progressivo
- [ ] **Backend** - Sistema de usuários e progresso

### Melhorias Planejadas
- [ ] **SEO otimizado** - Melhor indexação
- [ ] **Acessibilidade** - WCAG 2.1 compliance
- [ ] **Performance** - Otimização de carregamento
- [ ] **Internacionalização** - Suporte a múltiplos idiomas

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### Áreas de Contribuição
- 🎨 **Design** - Melhorias visuais e UX
- 💻 **Funcionalidades** - Novas features JavaScript
- 📚 **Conteúdo** - Adição de novos módulos/aulas
- 🐛 **Bugs** - Correção de problemas
- 📖 **Documentação** - Melhoria da documentação

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- **Desenvolvedor**: [Seu Nome]
- **Email**: [seu-email@exemplo.com]
- **LinkedIn**: [linkedin.com/in/seu-perfil]
- **GitHub**: [github.com/seu-usuario]

## 🙏 Agradecimentos

- Inspiração no mercado financeiro brasileiro
- Comunidade de desenvolvedores web
- Especialistas em educação financeira
- Contribuidores e testadores do projeto

---

**⭐ Se este projeto foi útil para você, considere dar uma estrela no GitHub!**

*Desenvolvido com ❤️ para democratizar o conhecimento sobre investimentos de renda fixa no Brasil.*