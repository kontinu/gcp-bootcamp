FROM python:3.7-alpine

ENV PYTHONUNBUFFERED True
ARG version=0.0
ENV APP_VERSION=$version
ARG color
ENV COLOR=$color

WORKDIR /app
COPY requirements.txt /app
RUN pip3 install --no-cache-dir -r requirements.txt
COPY . /app

#CMD exec gunicorn --bind :8080 --workers 1 --threads 8 --timeout 0 main:app

ENTRYPOINT ["python3", "app.py"]
