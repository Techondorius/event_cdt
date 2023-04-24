run:
	docker compose up -d --build

lintcheck:
	pipenv run mypy --strict src/
	pipenv run flake8 src/
