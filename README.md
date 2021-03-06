## 開発方針

### ブランチ運用

- 原則 (GitHub-Flow)[https://gist.github.com/Gab-km/3705015] を意識する
- master ブランチは deploy 可能な物のみあげる
- 開発する場合は `feature/機能名` ブランチを作成してそちらで作業する
- 修正する場合は `fix/機能名` ブランチを作成する
- master ブランチで緊急を要する修正をする場合のみ master から `hotfix/` ブランチを切ることができる
- README.md は master から docs/update ブランチを切り更新することができる

### プルリクについて

- 基本的にはテンプレートに沿って作成する
- テンプレートに記載することがない場合は空欄でも良い

### nodejs のバージョン

- [Nodejs は v14.18.2 を使用する](https://nodejs.org/ja/blog/release/v14.18.2/
  - vercel が 14.x サポートなので 14 系の LTS
- こだわりがない場合は原則 nodenv を使用する

## npm scripts

| alias    | 実行内容                              | command                                                                                       |
| -------- | ------------------------------------- | --------------------------------------------------------------------------------------------- |
| dev      | 開発モードで起動                      | `next`                                                                                        |
| build    | ビルドします                          | `next build`                                                                                  |
| start    | 本番モードで起動                      | `next start`                                                                                  |
| api      | aspida を使用し、api の型を作成します | `aspida`                                                                                      |
| mc       | component を作成                      | `sh makeComponentsFile.sh`                                                                    |
| sb       | StoryBook を起動                      | `start-storybook -p 6006`                                                                     |
| build-sb | StoryBook をビルド                    | `build-storybook`                                                                             |
| lint     | ESLint でコードをチェック             | `eslint 'src/\*_/_.{js,jsx,ts,tsx}'`                                                          |
| lint:fix | ESLint でコードを修正                 | `eslint --fix 'src/\*_/_.{js,jsx,ts,tsx}'`                                                    |
| format   | prettier でコードを format            | `prettier --write --loglevel=warn '{public,src}/\*_/_.{js,jsx,ts,tsx,html,gql,graphql,json}'` |
| fix      | format した後 linter にかける         | `yarn -s format && yarn -s lint:fix`                                                          |

## commit message

[Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0/) の規則に沿って commit message を記述してください。
commit-lint を導入しているため、規則に沿わない場合エラーになります。
重要なコミットは prefix に ! をつけます。

| prefix   | 内容                                       |
| -------- | ------------------------------------------ |
| build    | ビルド                                     |
| ci       | CI                                         |
| chore    | 雑事（カテゴライズする必要ないようなもの） |
| docs     | ドキュメント                               |
| feat     | 新機能                                     |
| fix      | バグフィックス                             |
| perf     | パフォーマンス改善系                       |
| refactor | リファクタリング                           |
| revert   | コミット取り消し（git revert）             |
| style    | コードスタイル, format 等                  |
| test     | テスト                                     |

```
chore: commit-lintを導入した
feat!: ログイン機能を作成した
```

## 環境変数(.env.local)

```
MICROCMS_API_URL=https://XxXxXxXxXxXxX.microcms.io/api/v1
MICROCMS_API_KEY=XxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx
```

## ディレクトリ説明

### src/

全てのソースコードを配置します。

### pages/

nextjs のページコンポーネントを配置します。

### components/

コンポーネントを配置します。
デザインパターンは atomic design を参考にしています。
`ui-elements` と `ui-parts` は `yarn mc` を実行してファイルを作成してください。

### components/functional

見た目がないコンポーネントを配置する。
ログイン判定などのコンポーネント。

### components/ui-elements

Atomic デザインでいうところの atoms です。
最小単位のコンポーネントです。
button や unordered list でいう list item などが当たります。

### components/ui-parts

Atomic デザインでいうところの molecules です。
最小単位のコンポーネントが複数合わさったコンポーネントです。
unordered list や header などが当たります。

### hooks/

カスタムフックを配置します。

### apis/

aspida で使用する型情報を配置します。

### libs/

ライブラリの初期化や設定ファイルを配置します。

### theme/

chakra-ui で使用する theme 関連のファイルを配置します。

### utils/

googleTagManager 等の analytics 関連のファイルを配置します。

### types/

汎用的な型定義ファイルを配置します。
