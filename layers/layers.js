var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_BatasAdministrasi_1 = new ol.format.GeoJSON();
var features_BatasAdministrasi_1 = format_BatasAdministrasi_1.readFeatures(json_BatasAdministrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasi_1.addFeatures(features_BatasAdministrasi_1);
var lyr_BatasAdministrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasi_1, 
                style: style_BatasAdministrasi_1,
                popuplayertitle: 'Batas Administrasi',
                interactive: false,
                title: '<img src="styles/legend/BatasAdministrasi_1.png" /> Batas Administrasi'
            });
var format_Zonaperumahan_2 = new ol.format.GeoJSON();
var features_Zonaperumahan_2 = format_Zonaperumahan_2.readFeatures(json_Zonaperumahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonaperumahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonaperumahan_2.addFeatures(features_Zonaperumahan_2);
var lyr_Zonaperumahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonaperumahan_2, 
                style: style_Zonaperumahan_2,
                popuplayertitle: 'Zonaperumahan',
                interactive: false,
                title: '<img src="styles/legend/Zonaperumahan_2.png" /> Zonaperumahan'
            });
var format_Zonakomersil_3 = new ol.format.GeoJSON();
var features_Zonakomersil_3 = format_Zonakomersil_3.readFeatures(json_Zonakomersil_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonakomersil_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonakomersil_3.addFeatures(features_Zonakomersil_3);
var lyr_Zonakomersil_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonakomersil_3, 
                style: style_Zonakomersil_3,
                popuplayertitle: 'Zonakomersil',
                interactive: false,
                title: '<img src="styles/legend/Zonakomersil_3.png" /> Zonakomersil'
            });
var format_Zonapublik_4 = new ol.format.GeoJSON();
var features_Zonapublik_4 = format_Zonapublik_4.readFeatures(json_Zonapublik_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonapublik_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonapublik_4.addFeatures(features_Zonapublik_4);
var lyr_Zonapublik_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonapublik_4, 
                style: style_Zonapublik_4,
                popuplayertitle: 'Zonapublik',
                interactive: false,
                title: '<img src="styles/legend/Zonapublik_4.png" /> Zonapublik'
            });
var format_Jangkauan800m_5 = new ol.format.GeoJSON();
var features_Jangkauan800m_5 = format_Jangkauan800m_5.readFeatures(json_Jangkauan800m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jangkauan800m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jangkauan800m_5.addFeatures(features_Jangkauan800m_5);
var lyr_Jangkauan800m_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jangkauan800m_5, 
                style: style_Jangkauan800m_5,
                popuplayertitle: 'Jangkauan 800m',
                interactive: false,
                title: '<img src="styles/legend/Jangkauan800m_5.png" /> Jangkauan 800m'
            });
var format_Jangkauan400m_6 = new ol.format.GeoJSON();
var features_Jangkauan400m_6 = format_Jangkauan400m_6.readFeatures(json_Jangkauan400m_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jangkauan400m_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jangkauan400m_6.addFeatures(features_Jangkauan400m_6);
var lyr_Jangkauan400m_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jangkauan400m_6, 
                style: style_Jangkauan400m_6,
                popuplayertitle: 'Jangkauan 400m',
                interactive: false,
                title: '<img src="styles/legend/Jangkauan400m_6.png" /> Jangkauan 400m'
            });
var format_Halte_7 = new ol.format.GeoJSON();
var features_Halte_7 = format_Halte_7.readFeatures(json_Halte_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_7.addFeatures(features_Halte_7);
var lyr_Halte_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_7, 
                style: style_Halte_7,
                popuplayertitle: 'Halte',
                interactive: true,
                title: '<img src="styles/legend/Halte_7.png" /> Halte'
            });

lyr_Positron_0.setVisible(true);lyr_BatasAdministrasi_1.setVisible(true);lyr_Zonaperumahan_2.setVisible(true);lyr_Zonakomersil_3.setVisible(true);lyr_Zonapublik_4.setVisible(true);lyr_Jangkauan800m_5.setVisible(true);lyr_Jangkauan400m_6.setVisible(true);lyr_Halte_7.setVisible(true);
var layersList = [lyr_Positron_0,lyr_BatasAdministrasi_1,lyr_Zonaperumahan_2,lyr_Zonakomersil_3,lyr_Zonapublik_4,lyr_Jangkauan800m_5,lyr_Jangkauan400m_6,lyr_Halte_7];
lyr_BatasAdministrasi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Zonaperumahan_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'Jangkauan': 'Jangkauan', 'type': 'type', 'start': 'start', 'area': 'area', 'perimeter': 'perimeter', 'NAMZON': 'NAMZON', });
lyr_Zonakomersil_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'Jangkauan': 'Jangkauan', 'type': 'type', 'start': 'start', 'area': 'area', 'perimeter': 'perimeter', 'NAMZON': 'NAMZON', });
lyr_Zonapublik_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'Jangkauan': 'Jangkauan', 'type': 'type', 'start': 'start', 'area': 'area', 'perimeter': 'perimeter', 'NAMZON': 'NAMZON', });
lyr_Jangkauan800m_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'Jangkauan': 'Jangkauan', 'type': 'type', 'start': 'start', 'area': 'area', 'perimeter': 'perimeter', });
lyr_Jangkauan400m_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'Jangkauan': 'Jangkauan', 'type': 'type', 'start': 'start', 'area': 'area', 'perimeter': 'perimeter', });
lyr_Halte_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'Jangkauan': 'Jangkauan', });
lyr_BatasAdministrasi_1.set('fieldImages', {'OBJECTID': '', 'WADMKD': '', 'WADMKC': '', 'WADMKK': '', 'WADMPR': '', 'SUMBER': '', 'LUASHA': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Zonaperumahan_2.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Name': '', 'REMARK': '', 'Jangkauan': '', 'type': '', 'start': '', 'area': '', 'perimeter': '', 'NAMZON': '', });
lyr_Zonakomersil_3.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Name': '', 'REMARK': '', 'Jangkauan': '', 'type': '', 'start': '', 'area': '', 'perimeter': '', 'NAMZON': '', });
lyr_Zonapublik_4.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Name': '', 'REMARK': '', 'Jangkauan': '', 'type': '', 'start': '', 'area': '', 'perimeter': '', 'NAMZON': '', });
lyr_Jangkauan800m_5.set('fieldImages', {'OBJECTID': '', 'Name': '', 'REMARK': '', 'Jangkauan': '', 'type': '', 'start': '', 'area': '', 'perimeter': '', });
lyr_Jangkauan400m_6.set('fieldImages', {'OBJECTID': '', 'Name': '', 'REMARK': '', 'Jangkauan': '', 'type': '', 'start': '', 'area': '', 'perimeter': '', });
lyr_Halte_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'Jangkauan': 'TextEdit', });
lyr_BatasAdministrasi_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Zonaperumahan_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'Jangkauan': 'no label', 'type': 'no label', 'start': 'no label', 'area': 'no label', 'perimeter': 'no label', 'NAMZON': 'no label', });
lyr_Zonakomersil_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'Jangkauan': 'no label', 'type': 'no label', 'start': 'no label', 'area': 'no label', 'perimeter': 'no label', 'NAMZON': 'no label', });
lyr_Zonapublik_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'Jangkauan': 'no label', 'type': 'no label', 'start': 'no label', 'area': 'no label', 'perimeter': 'no label', 'NAMZON': 'no label', });
lyr_Jangkauan800m_5.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'Jangkauan': 'no label', 'type': 'no label', 'start': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_Jangkauan400m_6.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'Jangkauan': 'no label', 'type': 'no label', 'start': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_Halte_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - always visible', 'REMARK': 'hidden field', 'Jangkauan': 'hidden field', });
lyr_Halte_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});