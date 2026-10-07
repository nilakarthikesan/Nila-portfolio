# Nila Karthikesan portfolio

An earlier personal portfolio interface built around a television and remote-control layout. The repository contains a standalone HTML version and Next.js implementations. It is a record of prior interface work; the GitHub profile README describes my current engineering and research focus.

## Standalone version

`index.html` contains the layout, styling, channel navigation, social links, and Web Audio effects.

```bash
git clone https://github.com/nilakarthikesan/Nila-portfolio.git
cd Nila-portfolio
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [http://localhost:8000](http://localhost:8000).

## Next.js version

The root `src/` directory contains the earlier Next.js interface. A separate starter application remains in `nila-portfolio/`.

From the repository root:

```bash
npm install
npm run dev
```

`npm run build` and `npm start` build and serve the Next.js application.

## Project descriptions

The portfolio content includes earlier plans for CLIP moderation, language-model response comparison, and macro tracking. Descriptions of planned RAG explanations, scheduled evaluation, and meal planning should not be read as completed features. The linked repositories document their current implementation and limits.

## License

Personal project. All rights reserved, as stated in the original README.
