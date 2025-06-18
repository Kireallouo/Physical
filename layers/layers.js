var wms_layers = [];

var lyr__0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Рельеф<br />\
    <img src="styles/legend/_0_0.png" /> Высота над уровнем моря, м<br />\
    <img src="styles/legend/_0_1.png" /> менее 100<br />\
    <img src="styles/legend/_0_2.png" /> 100 - 150<br />\
    <img src="styles/legend/_0_3.png" /> 150 - 200<br />\
    <img src="styles/legend/_0_4.png" /> 200 - 250<br />\
    <img src="styles/legend/_0_5.png" /> более 250<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [6199722.585215, 7344068.874243, 6312897.400781, 7469432.005732]
        })
    });
var lyr_20_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Горизонтали (каждые 20м)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [6199722.585215, 7344068.874243, 6312897.400781, 7469432.005732]
        })
    });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Реки',
                interactive: true,
                title: 'Реки'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Озёра',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Озёра'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'Основные автодороги',
                interactive: false,
                title: 'Основные автодороги'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'Полезные ископаемые',
                interactive: true,
    title: 'Полезные ископаемые<br />\
    <img src="styles/legend/_5_0.png" /> Известняк<br />\
    <img src="styles/legend/_5_1.png" /> Песчано-гравийный материал<br />\
    <img src="styles/legend/_5_2.png" /> Песок<br />\
    <img src="styles/legend/_5_3.png" /> Суглинок<br />\
    <img src="styles/legend/_5_4.png" /> Глина<br />\
    <img src="styles/legend/_5_5.png" /> Нефть<br />' });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: 'Населённые пункты',
                interactive: true,
    title: 'Населённые пункты<br />\
    <img src="styles/legend/_6_0.png" /> Административный центр района<br />\
    <img src="styles/legend/_6_1.png" /> Центр сельского поселения<br />' });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: 'Административные границы',
                interactive: false,
    title: 'Административные границы<br />\
    <img src="styles/legend/_7_0.png" /> граница Благовещенского района<br />\
    <img src="styles/legend/_7_1.png" /> граница сельсовета<br />\
    <img src="styles/legend/_7_2.png" /> граница городского поселения Благовещенск<br />' });

lyr__0.setVisible(true);lyr_20_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(false);
var layersList = [lyr__0,lyr_20_1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7];
lyr__2.set('fieldAliases', {'OSM_ID': 'OSM_ID', 'NAME': 'NAME', 'WATERWAY': 'WATERWAY', });
lyr__3.set('fieldAliases', {'OSM_ID': 'OSM_ID', 'NAME': 'NAME', 'NATURAL': 'NATURAL', 'WATERWAY': 'WATERWAY', 'WETLAND': 'WETLAND', });
lyr__4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr__5.set('fieldAliases', {'id': 'id', 'MestoName': 'MestoName', 'ResourseTy': 'ResourseTy', 'Adress': 'Adress', 'ZapacyABC1': 'ZapacyABC1', 'ZapacyC2': 'ZapacyC2', 'EdinicyIzm': 'EdinicyIzm', });
lyr__6.set('fieldAliases', {'OSM_ID': 'OSM_ID', 'NAME': 'NAME', 'NAME_EN': 'NAME_EN', 'NAME_RU': 'NAME_RU', 'PLACE': 'PLACE', 'A_CNTR': 'A_CNTR', 'A_RGN': 'A_RGN', 'A_DSTRCT': 'A_DSTRCT', 'A_PSTCD': 'A_PSTCD', 'populatio': 'populatio', });
lyr__7.set('fieldAliases', {'id': 'id', '@id': '@id', '@relations': '@relations', 'admin_level': 'admin_level', 'boundary': 'boundary', 'name': 'name', 'type': 'type', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'name:ru': 'name:ru', 'official_status': 'official_status', });
lyr__2.set('fieldImages', {'OSM_ID': 'TextEdit', 'NAME': 'TextEdit', 'WATERWAY': 'TextEdit', });
lyr__3.set('fieldImages', {'OSM_ID': 'TextEdit', 'NAME': 'TextEdit', 'NATURAL': 'TextEdit', 'WATERWAY': 'TextEdit', 'WETLAND': 'TextEdit', });
lyr__4.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'Range', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr__5.set('fieldImages', {'id': 'TextEdit', 'MestoName': 'TextEdit', 'ResourseTy': 'TextEdit', 'Adress': 'TextEdit', 'ZapacyABC1': 'TextEdit', 'ZapacyC2': 'TextEdit', 'EdinicyIzm': 'TextEdit', });
lyr__6.set('fieldImages', {'OSM_ID': 'TextEdit', 'NAME': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_RU': 'TextEdit', 'PLACE': 'TextEdit', 'A_CNTR': 'TextEdit', 'A_RGN': 'TextEdit', 'A_DSTRCT': 'TextEdit', 'A_PSTCD': 'TextEdit', 'populatio': 'Range', });
lyr__7.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', '@relations': 'KeyValue', 'admin_level': 'TextEdit', 'boundary': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', 'name:ru': 'TextEdit', 'official_status': 'TextEdit', });
lyr__2.set('fieldLabels', {'OSM_ID': 'hidden field', 'NAME': 'no label', 'WATERWAY': 'hidden field', });
lyr__3.set('fieldLabels', {'OSM_ID': 'hidden field', 'NAME': 'no label', 'NATURAL': 'hidden field', 'WATERWAY': 'hidden field', 'WETLAND': 'hidden field', });
lyr__4.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr__5.set('fieldLabels', {'id': 'hidden field', 'MestoName': 'no label', 'ResourseTy': 'no label', 'Adress': 'no label', 'ZapacyABC1': 'no label', 'ZapacyC2': 'hidden field', 'EdinicyIzm': 'no label', });
lyr__6.set('fieldLabels', {'OSM_ID': 'hidden field', 'NAME': 'no label', 'NAME_EN': 'hidden field', 'NAME_RU': 'no label', 'PLACE': 'hidden field', 'A_CNTR': 'hidden field', 'A_RGN': 'hidden field', 'A_DSTRCT': 'hidden field', 'A_PSTCD': 'hidden field', 'populatio': 'no label', });
lyr__7.set('fieldLabels', {'id': 'no label', '@id': 'no label', '@relations': 'no label', 'admin_level': 'no label', 'boundary': 'no label', 'name': 'no label', 'type': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', 'name:ru': 'no label', 'official_status': 'no label', });
lyr__7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});