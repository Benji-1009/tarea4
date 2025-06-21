import { CommonModule } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

interface Image{
  id: number;
  url: string;
  categoria: string;
  titulo: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  images = signal<Image[]>([
    { id: 1, url: 'https://picsum.photos/200/300', categoria: 'Naturaleza', titulo: 'Naturaleza' },
    { id: 2, url: 'https://picsum.photos/200/301', categoria: 'Animales', titulo: 'Animales' },
    { id: 3, url: 'https://picsum.photos/200/302', categoria: 'Ciudades', titulo: 'Ciudades' },
    { id: 4, url: 'https://picsum.photos/200/302', categoria: 'Tecnologia', titulo: 'Tecnología' },
    { id: 5, url: 'https://picsum.photos/200/303', categoria: 'Naturaleza', titulo: 'Naturaleza' },
    { id: 6, url: 'https://picsum.photos/200/304', categoria: 'Animales', titulo: 'Animales' },
    { id: 7, url: 'https://picsum.photos/200/305', categoria: 'Ciudades', titulo: 'Ciudades' },
    { id: 8, url: 'https://picsum.photos/200/306', categoria: 'Tecnologia', titulo: 'Tecnología' }
   

  ]);
  selectedCategory = signal('Todos');
  filteredImages = computed(() => {
    const categoria = this.selectedCategory();
    const todas = this.images();
    return categoria === 'Todos' ? todas : todas.filter(image => image.categoria === categoria); 
  });
  filterImages(){
    console.log('Categoría seleccionada: ', this.selectedCategory)
  }
  constructor() {}
}
