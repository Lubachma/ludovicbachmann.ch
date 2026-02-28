.PHONY: help install dev build prod test lint format clean deploy

# Couleurs
GREEN  := \033[0;32m
YELLOW := \033[0;33m
CYAN   := \033[0;36m
RESET  := \033[0m

## —— Portfolio Makefile ——————————————————————————————

help: ## Affiche cette aide
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  $(CYAN)%-15s$(RESET) %s\n", $$1, $$2}'

## —— Installation ————————————————————————————————————

install: ## Installe les dependances npm
	npm ci

update: ## Met a jour les dependances
	npm update

## —— Developpement ———————————————————————————————————

dev: node_modules ## Lance le serveur de dev (localhost:4200)
	npx ng serve --open

watch: ## Build en mode watch (recompile automatiquement)
	npx ng build --watch --configuration development

## —— Build ———————————————————————————————————————————

build: node_modules ## Build de production
	npx ng build --configuration=production

prod: build ## Alias pour build de production
	@echo "$(GREEN)Build de production pret dans dist/portfolio/$(RESET)"

## —— Qualite de code —————————————————————————————————

test: node_modules ## Lance les tests unitaires
	npx ng test

lint: node_modules ## Verifie le formatage avec Prettier
	npx prettier --check "src/**/*.{ts,html,scss}"

format: node_modules ## Corrige le formatage avec Prettier
	npx prettier --write "src/**/*.{ts,html,scss}"

## —— Composants —————————————————————————————————————

component: ## Genere un composant (usage: make component NAME=mon-composant)
	npx ng generate component components/$(NAME) --flat=false --skip-tests

service: ## Genere un service (usage: make service NAME=mon-service)
	npx ng generate service services/$(NAME)

## —— Deploiement ————————————————————————————————————

deploy: build ## Build + deploie sur Infomaniak via lftp
	@./scripts/deploy.sh

## —— Dependances ————————————————————————————————————

node_modules: package-lock.json ## Installe les dependances si necessaire
	npm ci
	@touch node_modules

## —— Nettoyage ——————————————————————————————————————

clean: ## Supprime les fichiers de build et le cache
	rm -rf dist .angular/cache

reset: clean ## Clean + reinstalle les dependances
	rm -rf node_modules
	npm ci
