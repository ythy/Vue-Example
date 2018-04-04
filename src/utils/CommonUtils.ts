function getStringAscii ( input:string ) {
  if ( !input )
    return 0;
  let bytes = 0;
  for ( let i = 0; i < input.length; i++ ) {
    if ( input.charCodeAt( i ) >= 32 && input.charCodeAt( i ) <= 126 )
      bytes++;
    else
      bytes += 2;
  }
  return bytes;
}

function getMaxAsciiString ( input:string, maxBytes:number ) {
  var result = '';
  var max = 0;
  if ( input ) {
    for ( var i = 0; i < input.length; i++ ) {
      if ( input.charCodeAt( i ) >= 32 && input.charCodeAt( i ) <= 126 )
        max++;
      else
        max += 2;

      if ( max > maxBytes )
        break;
      else
        result += input.substring( i, i + 1 );
    }
  }
  return result;
}


export default {
  getStringAscii,
  getMaxAsciiString
}