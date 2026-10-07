# Nila Karthikesan portfolio

A responsive personal portfolio with a pink television frame and remote-inspired channel navigation. The current static website is `index.html`, `styles.css`, and `site.js`; it has no build step, external scripts, or required dependencies.

## Local preview

From the repository root:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [http://localhost:8000](http://localhost:8000).

The Home, Research, Engineering, and About sections remain readable without JavaScript. Native section links support keyboard navigation and browser history. JavaScript updates the channel indicator while scrolling. Reduced-motion preferences are respected, and the website does not play audio.

## Content

The portfolio describes current engineering experience and links directly to project repositories. SafeLattice is evaluation tooling; Never Trust the Context is an ongoing policy prototype; GTSfM work is reconstruction visualization and supporting software; the CLIP analyzer is a Python prototype. Descriptions do not claim demonstrated live-model safety improvements, production moderation accuracy, or completed speculative RAG and meal-planning features.

`Nila_s_Resume-11.pdf` remains an archived earlier résumé and is not linked as a current résumé. The root `src/` directory and nested `nila-portfolio/` directory contain earlier Next.js implementations, separate from the current static site.

## Hosting

The static assets are portable to the existing website host. No provider-specific runtime is required. A manual GitHub Pages workflow is available if Pages is configured for this repository; running that workflow does not update a separately hosted custom domain by itself. Deployment and domain routing must match the configured hosting provider.

## License

Personal project. All rights reserved, as stated in the original README.
