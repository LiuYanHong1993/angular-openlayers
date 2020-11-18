
import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line
import { Map, View } from 'ol';
import { Tile } from "ol/layer";
import { OSM, XYZ } from "ol/source";

@Component({
  selector: 'app-ol-demo',
  templateUrl: './ol-demo.component.html',
  styleUrls: ['./ol-demo.component.scss']
})
export class OlDemoComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

    var TiandiMap_vec = new Tile({
      source: new XYZ({
        url: "http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=f0e80de7746fcfc7727148478b090f25",
        wrapX: false
      })
    });
    var TiandiMap_cva = new Tile({
      source: new XYZ({
        url: "http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=f0e80de7746fcfc7727148478b090f25",
      })
    });
    //实例化Map对象加载地图
    let map = new Map({
        //地图容器div的ID
      target: 'trackMap',
      //地图容器中加载的图层
      layers:  [TiandiMap_vec, TiandiMap_cva],
      //地图视图设置
      view: new View({
        //地图初始中心点
        center: [140, 34],
        //地图初始显示级别
        zoom: 4,
        projection: "EPSG:4326"
      })
    });
  }

}
