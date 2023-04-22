import { Component, Renderer2, OnInit } from '@angular/core';
import Cartao from './cartao/cartao.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  darkMode = false; // Variável que controla o estado do modo claro/escuro
  tarefas: any[] = []; // Declare o tipo da variável tarefas como any[]
  cartoes: Cartao[] = [];

  constructor(private renderer: Renderer2) {} // Injete o Renderer2 no construtor

  ngOnInit(): void {
    this.tarefas.forEach((t) => {
      let cartao = new Cartao();
      cartao.nome = t.nome;
      cartao.descricao = t.descricao;
      cartao.checklist = t.checklist;
      this.cartoes.push(cartao);
    });
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;

    // Aplique ou remova a classe 'dark-mode' no body usando o Renderer2
    const body = this.renderer.selectRootElement('body');
    if (this.darkMode) {
      this.renderer.addClass(body, 'dark-mode');
    } else {
      this.renderer.removeClass(body, 'dark-mode');
    }
  }
}
