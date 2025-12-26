# OpenQuanta Protocol

![OpenQuanta Banner](public/images/oqwhite.svg) **The decentralized protocol for scientific publishing.** OpenQuanta enables researchers to publish work, secure authorship via NFTs, and build verifiable reputation on-chain—without extractive intermediaries.

[Live Demo](https://openquanta.science) · [Documentation](https://docs.openquanta.science) · [Report Bug](https://github.com/yourusername/openquanta/issues)

---

## ⚡ Introduction

OpenQuanta is a market-driven publishing platform built to disrupt the traditional academic publishing model. By leveraging blockchain technology and **Authorship NFTs**, we ensure:

* **90% Revenue Retention:** Authors keep the majority of access fees (vs. traditional ~10%).
* **Immutable Reputation:** Citations and reviews are recorded on-chain, creating a verifiable trust score.
* **Liquid IP:** Research assets can be traded, auctioned, or fractionalized.

## ✨ Key Features

* **Authorship NFTs:** Automatically mint an NFT upon publication representing IP ownership.
* **Reputation Layer:** A dynamic scoring system based on citation velocity and peer review quality.
* **Decentralized Access:** Pay-per-view access to full papers using **$QPT** tokens.
* **Peer Review DAO:** Incentivized, transparent peer reviews recorded as digital assets.
* **Institutional Integration:** Bulk access management for universities and research labs.

## 🛠️ Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Deployment:** [Vercel](https://vercel.com/)
* **Blockchain (Planned):** Solana / Ethereum (EVM compatible)

## 🚀 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

* Node.js 18+ 
* npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/yourusername/openquanta.git](https://github.com/yourusername/openquanta.git)
    cd openquanta
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables**
    Copy the example env file and update it with your keys.
    ```bash
    cp .env.example .env.local
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
/app
  /about         # "How it Works" Bento Grid & Explanation
  /blog          # Dynamic blog routing & content
  /components    # Reusable UI components (Navbar, Footer, Cards)
  /contact       # Contact form & info
  /data          # Static data files (Docs map, Blog posts)
  /docs          # (Deprecated) Documentation is moved to external platform
  /legal         # Privacy, Terms, Cookie policies
  /marketplace   # Marketplace teaser page
  page.tsx       # Landing page (Hero)
/public
  /icons         # Partner logos & SVGs
