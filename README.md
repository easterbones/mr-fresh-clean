# Mr. Fresh – site static
Fisiere: index / despre-noi / servicii / contact .html + style.css + script.js + assets/img/ + assets/video/
Render: New > Static Site > conectezi repo-ul GitHub > Build Command: (gol) > Publish Directory: .
Contact: vizitatorii pot lua legatura prin WhatsApp, telefon, email sau retelele sociale.
Media:
```text
assets/
  img/
    logo.png
    scara-bloc.jpg
    fundal.jpg
    portret-echipa.jpg
    manusi.jpg
    geamuri.jpg
    living.jpg
    birou.jpg
    scari-bloc.jpg
    eveniment.jpg
  video/
    hero.mp4
```
Pune fisierele in directoarele de mai sus cu aceste nume sau schimba calea din atributul `data-image` / `data-video` din pagina corespunzatoare. `fundal.jpg` este imaginea poster si fallback pentru videoclip. Daca un fisier lipseste, pagina afiseaza un placeholder.
Imaginile sunt afisate cu `object-fit: cover`; foloseste fotografii landscape pentru sectiunile de servicii si hero.
