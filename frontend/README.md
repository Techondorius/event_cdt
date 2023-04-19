# 起動時
`make run`または`docker compose up -d --build` でdocker composeで開発環境が起動する

# lintを脳死でかけたいとき
`make lint` でsrc以下の.prettierignoreにかかれているもの以外がPrettierの餌食になる
