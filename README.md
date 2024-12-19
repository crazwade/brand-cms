# 通用品牌網站框架 (Generic Brand Website Framework)

這個專案是一個可重複使用的框架，用於快速構建各種品牌的展示型網站，包含前台展示和後台內容管理功能。

## 功能特色

### 前台 (Client)

*   **響應式設計：** 支援各種裝置 (桌面、平板、手機) 的瀏覽。
*   **可自定義主題：** 方便更換網站的配色、字體和樣式。
*   **模組化架構：** 易於擴展和維護，可根據需求新增或移除功能模組。
*   **SEO 優化：** 內建基本的 SEO 設定，提升網站在搜尋引擎的排名。
*   **多語系支援：** (可選) 支援多種語言的內容展示。

### 後台 (Admin)

*   **使用者管理：** 管理後台使用者帳號和權限。
*   **內容管理系統 (CMS)：**
  *   **頁面管理：** 新增、編輯、刪除和排序頁面。
  *   **文章管理：** 發布、編輯和管理文章，支援分類和標籤。
  *   **圖片管理：** 上傳、管理和使用圖片。
  *   **檔案管理：** 上傳和管理其他檔案 (例如：PDF、Word 文件)。
*   **選單管理：** 建立和管理網站的導覽選單。
*   **設定管理：** 設定網站的基本資訊，例如：網站名稱、描述、Logo 等。
*   **數據分析：** (可選) 整合 Google Analytics 或其他分析工具。

## 技術棧

*   **前台：** Nuxt.js、Tailwind CSS
*   **後台：** Vue.js、Element-Plus、Tailwind CSS
*   **Server：** Node.js、Express、MongoDB

## 開發環境

*   Node.js
*   npm

## 安裝步驟

1.  複製專案：

  ```bash
    git clone [https://github.com/](https://github.com/)[您的使用者名稱]/[您的專案名稱].git
  ```

2.  進入專案目錄：

  ```bash
    cd [您的專案名稱]
  ```

3.  安裝前台依賴：

  ```bash
    cd client
    npm install 或 yarn install 或 pnpm install
  ```

4.  安裝後台依賴：

  ```bash
    cd server
    npm install 或 yarn install 或 pnpm install
  ```

5.  (後台) 設定環境變數：

  *   複製 `.env.example` 檔案並命名為 `.env`。
  *   根據您的環境修改 `.env` 檔案中的變數。

6.  啟動開發伺服器：

  ```bash
    # 前台
    cd client
    npm run dev 或 yarn dev 或 pnpm dev

    # 後台
    cd server
    npm run dev 或 yarn dev 或 pnpm dev

    # 管理介面 (如果獨立運行)
    cd admin
    npm run dev 或 yarn dev 或 pnpm dev
  ```

## 部署

[在此說明部署步驟]

## 貢獻

歡迎任何形式的貢獻！

## 授權

[在此填寫授權協議，例如：MIT License]