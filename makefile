deploy: git tutorial
	@python3 -m mkdocs gh-deploy

tutorial:
	@cp tutorial.md docs/labs.md

git:
	@git add . || true
	@git commit -m "auto deploy" || true
	@git push origin main || true

serve:
	@python3 -m mkdocs serve
s: serve

install:
	@pip3 install -r requirements.txt
