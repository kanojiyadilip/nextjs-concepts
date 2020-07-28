// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var fs = require('fs');
var beautify = require('js-beautify').html


export default (req, res) => {

  api().then(
    data => {
      fs.writeFile(process.cwd()+"/public/html/static.html", beautify(data, { indent_size: 2, space_in_empty_paren: true }), function(err, result) {
        if(err) {
            return console.log(err);
        }
        res.statusCode = 200
        res.json({statusCode: 200, msg: 'The file was saved!' })
      }); 
    },
    err => {
      console.log("err==========err===========>", err);
        // Deal with the fact the chain failed
    }
  );

}

async function api() {
  const resHtml = await fetch('http://localhost:3000/posts',{method: 'get', headers: {'Content-Type':'text/html"'}});
  const resData = await resHtml.text();
  console.log("resData========>", `${process.cwd()}/public/html/`);
  return resData;
}