var DraggableHandler = (function()
{
	function Constructor(domElement_el)
	{
		//public members
		this.mouseDown = false;
		this.mouseOver = false;
		this.thing = null;
		this.offsetx = null;
		this.offsety = null;
		this.zIndex = 1;
		
		this.thing = null;
	}
	//private members
	var self = {draggable:domElement_el};
	
	//private accessor
	this.offestx = function()
	{
		if (this.offsetx == null)
			return 0;
		return this.offsetx;
	};
	this.offesty = function()
	{
		if (this.offsetx == null)
			return 0;
		return this.offsetxy;
	};

//initializer
Constructor.prototype.over = function(event)
	{
	this.thing = event.target;
	}
	if (this.thing.className == "draggable")
	{
		this.mouseover = true;
	} 
	else 
	{
		this.mouseover = false;
		this.thing = null;
	}

	
Constructor.prototype.down = function(event)
{
	if(!event) 
		{
		alert('Your browser does not support.');
		return;
		}
}
 if (this.mouseover)
 {
	 //record the mouse}this.mousedown = true;
	 this.offsetx = 
		 event.clientx - math.floor(this.thing.offsetLeft);
	 this.offsety = 
		 event.client - Math.floor(this.thing.offsetTop);
	 //save z index
	 this.zIndex = this.thing.style.zIndex;
	 this.thing.style.zIndex = 10000;
	 
	 //change the cursor
	 this.thing.style.cursor = "move";
 }
  
Constructor.prototype.move = function(event){
	if (this.mousedown && this.mouseover && this.thing != null)
	{
	this.thing.style.position = "absolute";
	this.thing.style.margin = "0px";
	this.thing.style.left = event.clientx - this.offsetx +"px";
	this.thing.style.right = event.clienty - this.offsety + "px";
	}
	};

Constructor.prototype.out = function(event)
{
	this.mouseover = false;
	this.thing = null;
};
Constructor.prototype.up = function(event)
{
	this.mousedown = false;
	if(this.thing !=null){
		//reset the z index {
		this.thing.style.zIndex = this.zIndex;
		this.zIndex = 100;
		//reset the cursor
		this.style.cursor = "pointer";
	}
};

//event handlers
self.draggable.mousedown( this.down);
self.draggable.mousemove( this.move);
self.draggable.mouseover( this.over);
self.draggable.mouseout( this.out);
self.draggable.mouseup( this.up);

return Constructor;
})();
