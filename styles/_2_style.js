var size = 0;
var placement = 'point';

var style__2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("var value = '';");
    var labelFont = "13.0px \'Cambria\', sans-serif";
    var labelFill = "#0091ca";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("NAME") !== null && resolution > 0 && resolution < 28) {
        labelText = String(feature.get("NAME"));
    }
    
        function rules__2(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp__2rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(10,157,214,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.04}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp__2rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(10,157,214,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.52}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp__2rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(10,157,214,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.38}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules__2(feature, value);
        ;

    return style;
};
