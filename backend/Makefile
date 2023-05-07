service = gin-gonic

start:
	docker compose up -d --build

run:
	docker compose exec gin-gonic go run .

database:
	docker compose exec sql mysql -h localhost -u root -p mypy

tidy:
	docker compose run $(service) go mod tidy

lintcheck:
	docker compose exec
