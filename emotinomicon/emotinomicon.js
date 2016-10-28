// nodejs compatibility
var math
if(require != undefined){
  math = require("mathjs")
}

math.config({number:"BigNumber",precision:64});

var tokens = ["\ud83d\ude00","\ud83d\ude05","\ud83d\ude09","\ud83d\ude0d","\ud83d\ude12","\ud83d\ude17","\ud83d\ude1c","\ud83d\ude21","\ud83d\ude01","\ud83d\ude06","\ud83d\udd1f","\ud83d\udcaf","\u2795","\u2796","\u2797","\u2716","\u23eb","\u23ec","\u23ea","\u23e9","\ud83c\udd99","\ud83d\ude0a","\ud83d\ude0e","\ud83d\ude13","\ud83d\ude18","\ud83d\ude1d","\ud83d\ude22","\ud83d\ude02","\ud83d\ude07","\u263a\ufe0f","\ud83d\ude0f","\ud83d\ude14","\ud83d\ude19","\ud83d\ude1e","\ud83d\ude23","\ud83d\ude03","\ud83d\ude08","\ud83d\ude0b","\ud83d\ude10","\ud83d\ude15","\ud83d\ude1a","\ud83d\ude1f","\ud83d\ude24","\ud83d\ude04","\ud83d\udc7f","\ud83d\ude0c","\ud83d\ude11","\ud83d\ude16","\ud83d\ude1b","\ud83d\ude20","\ud83d\ude25","\ud83d\ude26","\ud83d\ude2b","\ud83d\ude30","\ud83d\ude35","\ud83d\ude3a","\ud83d\ude3f","\ud83d\ude27","\ud83d\ude2c","\ud83d\ude31","\ud83d\ude36","\ud83d\ude3b","\ud83d\ude40","\ud83d\ude28","\ud83d\ude2d","\ud83d\ude32","\ud83d\ude37","\ud83d\ude3c","\ud83d\udc63","\ud83d\ude29","\ud83d\ude2e","\ud83d\ude33","\ud83d\ude38","\ud83d\ude3d","\ud83d\udc64","\ud83d\ude2a","\ud83d\ude2f","\ud83d\ude34","\ud83d\ude39","\ud83d\ude3e","\ud83d\udc65","\ud83c\udf11","\ud83c\udf12","\ud83c\udf13","\ud83c\udf14","\ud83c\udf15","\ud83c\udf16","\ud83c\udf17","\ud83c\udf18","\ud83d\udd22","\ud83d\udd24","\ud83d\udd21","\ud83d\udd20","\u2139","\ud83d\udcf6","\ud83c\udfa6","\ud83d\udd23","\ufe0f\u2757","\ufe0f\u2753","\u2755","\u2754","\u203c\ufe0f","\u2049\ufe0f","\ud83c\udfb2"];
function tokenize(r){r=r.trim();for(var t=[],n=0,e="",i=tokens;n<r.length;){for(var a=r.length-n;a>0;){var h=i.indexOf(r.substring(n,n+a));if(-1!==h){""!==e&&t.push(e.trim()),e="",t.push(i[h]),n+=a-1;break}a--,0===a&&(e=e.concat(r.charAt(n)))}n++}return""!==e&&t.push(e.trim()),t}

var factorial = math.factorial;
var mem=[];
function arithmeticException(name){
	this.name=name;
}
function fibonacci(n){
	if(n<0){
		return -1;
	}
	if(n==0){
		return 0;
	}
	if(n<3){
		return 1;
	}
	return fibonacci(n-1)+fibonacci(n-2);
}
function display(x){
	return x.map(function(e){return Number(e.valueOf())||e.toString()});
}
function Emotinomicon(code){
	var x=tokenize(code).map(function(e){
		if(tokens.indexOf(e)<0)return e.split("");
		return e;
	});
	for(var j=0;j<x.length;j++){
		if(Array.isArray(x[j])){
			var l=x[j].length;
			x.splice.apply(x,[j,1].concat(x[j]));
			j+=l-1;
		}
	}
	var stack=[];
	var stringMode = false;
	var ostr="";
	function outwrite(arg){
		ostr+=arg;
		process.stdout.write(arg);
	}
	function step(code,i,stack,stringMode){
		if(stringMode){
			if(tokens.indexOf(x[i])==65)stringMode=false;
			else stack.push(x[i].charCodeAt());
		} else {
			switch(tokens.indexOf(x[i])){
				case 0:stack.push(math.bignumber(0));break;
				case 1:stack.push(math.bignumber(1));break;
				case 2:stack.push(math.bignumber(2));break;
				case 3:stack.push(math.bignumber(3));break;
				case 4:stack.push(math.bignumber(4));break;
				case 5:stack.push(math.bignumber(5));break;
				case 6:stack.push(math.bignumber(6));break;
				case 7:stack.push(math.bignumber(7));break;
				case 8:stack.push(math.bignumber(8));break;
				case 9:stack.push(math.bignumber(9));break;
				case 10:stack.push(math.bignumber(10));break;
				case 11:stack.push(math.bignumber(100));break;
				case 12:var b=stack.pop(),a=stack.pop();stack.push(math.add(a,b));break;
				case 13:var b=stack.pop(),a=stack.pop();stack.push(math.subtract(a,b));break;
				case 14:var b=stack.pop(),a=stack.pop();stack.push(math.divide(a,b));break;
				case 15:var b=stack.pop(),a=stack.pop();stack.push(math.multiply(a,b));break;
				case 16:var inpu=prompt().split("");if(inpu.length==0)stack.push(-1);else inpu.forEach(function(e){stack.push(math.bignumber(e.charCodeAt()))});break;
				case 17:outwrite(String.fromCharCode(Number(stack.pop().valueOf())).replace(/\n/g,"<br>"));break;
				case 19:
					if(stack[stack.length-1]){
						var depth=1;
						for(var j=i-1;depth;--j){
							if("\u23e9"==x[j])depth++;
							if("\u23ea"==x[j])depth--;
						}
						i=j;
					}
				break;
				case 20:var r=stack.pop();stack.push(r,r);break;
				case 21:stack.pop();break;
				case 22:stack.reverse();break;
				case 23:var N=Number(stack.pop().valueOf());for(var j=0,k=[];j<N;j++)k.push(stack.pop());k.reverse();stack=stack.concat(k);break;
				case 24:var a=stack.pop();stack.push(Math.pow(stack.pop(),a));break;
				case 25:var N=stack.pop(),B=stack.pop();stack.push(Math.log(N)/Math.log(B));break;
				case 26:stack.push(-stack.pop());break;
				case 27:stack.push(Math.abs(stack.pop()));break;
				case 28:stack.push(2*stack.pop());break;
				case 29:stack.push(3*stack.pop());break;
				case 30:stack.push(4*stack.pop());break;
				case 31:stack.push(stack.pop()/2);break;
				case 32:stack.push(stack.pop()/3);break;
				case 33:stack.push(stack.pop()/4);break;
				case 34:stack.push(Math.pow(stack.pop(),2));break;
				case 35:stack.push(Math.pow(stack.pop(),3));break;
				case 36:stack.push(Math.pow(stack.pop(),4));break;
				case 37:stack.push(Math.pow(stack.pop(),1/2));break;
				case 38:stack.push(Math.pow(stack.pop(),1/3));break;
				case 39:stack.push(Math.pow(stack.pop(),1/4));break;
				case 40:stack.push(Math.floor(stack.pop()));break;
				case 41:stack.push(Math.ceil(stack.pop()));break;
				case 42:stack.push(Math.round(stack.pop()));break;
				case 43:stack.push(stack.pop()+1);break;
				case 44:stack.push(stack.pop()-1);break;
				case 45:var r=stack.pop();stack.push(r%stack.pop());break;
				case 46:stack.push(Math.pow(2,stack.pop()));break;
				case 47:stack.push(Math.pow(3,stack.pop()));break;
				case 48:stack.push(Math.pow(4,stack.pop()));break;
				case 49:stack.push(fibonacci(stack.pop()));break;
				case 50:stack.push(lucas(stack.pop()));break;
				case 51:stack.push(math.pi);break;
				case 52:stack.push(math.e);break;
				case 53:stack.push(math.phi);break;
				case 54:stack.push(Math.log(stack.push()));break;
				case 55:stack.push(Math.log10(stack.push()));break;
				case 56:stack.push(Math.exp(stack.push()));break;
				case 57:stack.push(Math.pow(10,stack.push()));break;
				case 58:i=stack.pop()-1;break;
				case 59:var C=stack.pop();x[stack.pop()]=String.fromCharCode(C);break;
				case 60:stack.push(x[stack.pop()].charCodeAt(0));break;
				case 61:stack.push(stack.pop()%2);break;
				case 62:stack.push(Math.random());break;
				case 63:outwrite(stack.pop());break;
				case 64:stringMode=true;break;
				case 66:outwrite("\n");break;
				case 67:try{var inpu=prompt();stack.push(math.bignumber(inpu))}catch(e){stack.push(-1);};break;
				case 93:stack.push(math.eval("i"));break;
				case 96:stack.push(factorial(stack.pop()));break;
				case 98:var B=stack.pop(),A=stack.pop(),N=stack.pop();stack.push(N?A:B);break;
				case 99:i++;break;
				case 100:if(stack.pop())i++;break;
				case 101:stack.push(dblFactorial(stack.pop()));break;
				case 102:if(!stack.pop())i++;break;
				case 103:var max=stack.pop(),min=stack.pop();stack.push(Math.floor(Math.random()*(max-min))+min);break;
			}
		}
		if(++i<x.length){
			return undefined
		} else {
			return ostr
		}
	}
	var i=0;
	while(true){
		var oout=step(code,i,stack,stringMode);
		i++;
		if(oout != undefined) return oout;
	}
}
var code="";
var r=0;
var imp = [64,65];
var io  = [16,17,63,66,67]
var sm  = [20,21,22,23];
var op  = [12,13,14,15,54,55,56,57,61,97,98,101];
var dt  = [51,52,53,60,62,93,103];
var ctl = [18,19,58,59,99,100,102];
for(var i=24;i<51;i++){
	op.push(i);
}
for(var i=0;i<12;i++){
	dt.push(i);
}

module.exports = Emotinomicon;