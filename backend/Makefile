run:
	docker compose up -d --build

lintcheck:
	pipenv run mypy --strict api/
	pipenv run flake8 api/
