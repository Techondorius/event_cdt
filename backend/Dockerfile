FROM python:3.10.4
WORKDIR /src
COPY Pipfile .
COPY Pipfile.lock .
RUN pip install pipenv && pipenv --python 3 && pipenv install
