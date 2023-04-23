# 開発環境構築

注: インストールしなくてもローカルでの実行に差し支えはない。但し、VSCodeなどのIDEで補完が効かない

1. (推奨)環境変数に`PIPENV_VENV_IN_PROJECT=true`を設定する。
2. `pip install pipenv`または`pip3 install pipenv`でpipenvをインストールする
3. このディレクトリに移動して、`make install`または`pyenv install`を実行する

# ローカルでの実行方法

`make run`または`docker compose up -d --build`でDocker Composeが起動する
