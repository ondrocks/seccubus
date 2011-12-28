steal(	'jquery/model',
	function(){

/**
 * @class Seccubus.GuiState
 * @parent index
 * @inherits jQuery.Model
 * This model tracks the generic state of the GUI. Since the GUI only lives in 
 * the users browser, there is no need to wrap any backend services.
 */
$.Model('Seccubus.GuiState',
/* @Static */
{
	// Default values for this object
	defaults : {
		findStatus	: 1,
		workspace	: -1,
		scans		: null
	}
},
/* @Prototype */
{
	// This function validates that status is set to a correct status
	setFindStatus : function(status) {
		status = parseInt(status);
		if ( status >= 1 && (status ==99 || status <= 6 ) ) {
			return(status);
		} else {
			if ( ! this.findStatus ) {
				return 1;
			} 
		}
	},
	// This function clears the scans object when a workspace is set
	setWorkspace : function(ws) {
		if ( ws != this.workspace ) {
			this.attr("scans",null);
		}
		return(ws);
	}
}); // Model

})  // Steal