service = gin-gonic

run:
	docker compose up -d
	docker compose logs -f $(service)

tidy:
	docker compose run $(service) go mod tidy

lintcheck:
	pipenv run mypy --strict --allow-subclassing-any api/
	pipenv run flake8 api/
