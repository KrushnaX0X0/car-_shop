
let WEBSITENAME = 'GuruDatt Car Shop'

let CARDBTN = 'View'



const PRODUCT = [
    
        {
            title: 'Fortuner',
            img: 'https://pngimg.com/uploads/toyota/toyota_PNG1937.png',
            price: '60 lakh'
        },
        {
            title: 'Audi Q7',
            img: 'https://imgs.search.brave.com/UGTlL89a5Bz0sOOXUWQv41Q6NqYGU_kaLLzLlXKDAg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzY2NHgzNzQvbi9j/dy9lYy81MzU5MS9x/NS1leHRlcmlvci1y/aWdodC1mcm9udC10/aHJlZS1xdWFydGVy/LTM2LmpwZWc_aXNp/Zz0wJnE9ODA',
            price: '90 lakh'
        },
        {
            title: 'BMW X5',
            img: 'https://imgs.search.brave.com/3LHUQdiqfTv_t_RqD9UolbGTqlAtV9L5j8LSTLjzQv8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzY2NHgzNzQvbi9j/dy9lYy8xNDA1OTEv/eDEtZXh0ZXJpb3It/cmlnaHQtZnJvbnQt/dGhyZWUtcXVhcnRl/ci03LmpwZWc_aXNp/Zz0wJnE9ODA',
            price: '85 lakh'
        },
        {
            title: 'Mercedes-Benz GLE',
            img: 'https://imgs.search.brave.com/iw8ci7p67xEBTFGlaBStzU6PNZaBO3piqo4Eb2DgjXE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzY2NHgzNzQvbi9j/dy9lYy8xNzg1MjUv/Z2xjLWV4dGVyaW9y/LXJpZ2h0LWZyb250/LXRocmVlLXF1YXJ0/ZXIuanBlZz9pc2ln/PTAmcT04MA',
            price: '95 lakh'
        },
        {
            title: 'Honda CR-V',
            img: 'https://imgs.search.brave.com/3FbBMOVRgxiZlDQxOAqzhUzVri8ct-EYfJQvtn4vkgs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMS5j/ZG4uYXV0b2V2b2x1/dGlvbi5jb20vaW1h/Z2VzL21vZGVscy9I/T05EQV9DUi1WLTIw/MTlfbWFpbi5qcGc',
            price: '40 lakh'
        },
        {
            title: 'Skoda Kodiaq',
            img: 'https://imgs.search.brave.com/IZbuoYGGBpltjdj3mBkwZUlXGSTPiiE2TkBNXEsDQVg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzY2NHgzNzQvbi9j/dy9lYy8xNTg5Mzcv/c3VwZXJiLWV4dGVy/aW9yLXJpZ2h0LWZy/b250LXRocmVlLXF1/YXJ0ZXItNi5qcGVn/P2lzaWc9MCZxPTgw',
            price: '55 lakh'
        },
        {
            title: 'Hyundai Tucson',
            img: 'https://imgs.search.brave.com/R3Enwf8y7-o48i_Y0PotfCmY_dUj-fHVcPGOGZFNeUU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzY2NHgzNzQvbi9j/dy9lYy8xNDI1MjMv/YWxjYXphci1leHRl/cmlvci1yaWdodC1m/cm9udC10aHJlZS1x/dWFydGVyLTExLmpw/ZWc_aXNpZz0wJnE9/ODA',
            price: '50 lakh'
        },
        {
            title: 'Jeep Compass',
            img: 'https://imgs.search.brave.com/kzdmVil-fLLYsc1n07JscV43dBH7xNAUqNQQbBl7roo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzY2NHgzNzQvbi9j/dy9lYy80NzEzOS9t/ZXJpZGlhbi1leHRl/cmlvci1yaWdodC1m/cm9udC10aHJlZS1x/dWFydGVyLTQuanBl/Zz9pc2lnPTAmcT04/MA',
            price: '45 lakh'
        },
        {
            title: 'Land Rover Discovery',
            img: 'https://imgs.search.brave.com/UkfFo2LdsRpGE8SsWwnzjlnZ4Ola9TjyM6Sak0OTP3s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzEwNTZ4NTk0L2N3/L2VjLzI0ODA2L0xh/bmQtUm92ZXItRGlz/Y292ZXJ5LUV4dGVy/aW9yLTEwNDM1NS5q/cGc_dj0yMDE3MTEw/MjE0MjEmcT04MCZ3/bT0x',
            price: '1 crore'
        },
        {
            title: 'Porsche Macan',
            img: 'https://imgs.search.brave.com/va7B-Hj_LV0HSqeW2QDyX2UyNtg2zI0EpfMOtoyyjPU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8yMDE5/LXBvcnNjaGUtbWFj/YW4tcGxhY2VtZW50/LTE1MzI0NTM3NTEu/anBnP3Jlc2l6ZT02/NDA6Kg',
            price: '75 lakh'
        },
        {
            title: 'Ther',
            img: 'https://imgs.search.brave.com/gNOqa-PdcBumud-eIyonbLi0cfVa9EyCsyf3Ag1S26c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2FyczI0LmNvbS9u/ZXctY2Fycy9fbmV4/dC9pbWFnZS8_dXJs/PWh0dHBzOi8vY2Ru/LjI0Yy5pbi9wcm9k/L25ldy1jYXItY21z/L1RoYXJfQ2FyX0lt/YWdlX2Y4NDQ4NTVk/ZmEucG5nJnc9MTky/MCZxPTc1',
            price: '14 lakh'
        }
    
    
    
];

export {PRODUCT,WEBSITENAME,CARDBTN}