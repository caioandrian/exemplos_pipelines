FROM cypress/base:18.16.1

# Instalar dependências adicionais necessárias para o Cypress 14
RUN apt-get update && \
    apt-get install -y \
    libgtk2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb \
    # Limpar cache
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Configurar variáveis de ambiente do Cypress
ENV CYPRESS_CACHE_FOLDER=/root/.cache/Cypress
ENV CI=1

# Criar diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Verificar instalação do Cypress
RUN npx cypress verify