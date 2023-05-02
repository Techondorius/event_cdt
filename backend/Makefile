run:
	docker compose up -d --build

lintcheck:
	pipenv run mypy --strict --allow-subclassing-any api/
	pipenv run flake8 api/
