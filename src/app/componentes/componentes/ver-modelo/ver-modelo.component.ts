import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modelo3dService } from '../../../services/modelo3d.service';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

@Component({
  selector: 'app-ver-modelo',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './ver-modelo.component.html',
  styleUrls: ['./ver-modelo.component.css']
})
export class VerModeloComponent implements OnInit, AfterViewInit {
  modelos: { id: number; url: string }[] = [];

  @ViewChildren('modeloCanvas') canvasList!: QueryList<ElementRef>;

  constructor(private modelosService: Modelo3dService) {}

  ngOnInit() {
    this.modelosService.obtenerModelos().subscribe((data) => {
      this.modelos = data;
    });
  }

  ngAfterViewInit() {
    this.canvasList.changes.subscribe(() => {
      this.modelos.forEach((modelo, index) => {
        this.cargarModeloEnBabylon(modelo.url, this.canvasList.toArray()[index].nativeElement);
      });
    });
  }

  cargarModeloEnBabylon(url: string, canvas: HTMLCanvasElement) {
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.ArcRotateCamera('camera', Math.PI / 2, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

    BABYLON.SceneLoader.ImportMesh('', url, '', scene, (meshes) => {
      console.log(`Modelo cargado: ${url}`);
    });

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener('resize', () => {
      engine.resize();
    });
  }
}
