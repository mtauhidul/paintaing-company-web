	// Pagination

	// Example html below
	//	<!-- Blog setup -->
	//	<div enable-pagination="true" columns="2" paginate-after="10">
	//		<div>
	//			<h2>Blog Title Goes Here</h2>
	//			<p>
	//				Excerpt [&hellip;]
	//			</p>
	//			<p class="float-right">
	//				<a href="">Read More</a>
	//			</p>
	//		</div>
	//	</div>

	(function(){

		var paginationControls = `
			<div paginator class="d-inline-flex align-items-center p-2 pb-4">
				<div>
					<a title="Back a page" class="paginate-back pr-2"><i class="icon-angle-circled-left h4"></i></a>
				</div>
				<div>
					Page <span page-number>1</span> of <span class="total-pages"></span>
				</div>
				<div>
					<a title="Forward a page" class="paginate-forward pl-2"><i class="icon-angle-circled-right h4"></i></a>
				</div>
			</div>
		`;

		function createPageContainer(pageNumber, container){
			var elem = $(document.createElement("div"));
			elem.addClass("paginated-page row");
			elem.attr('page', pageNumber);
			if (pageNumber > 1){
				elem.hide();
			}

			// Do not append the page containers until after all the current children have been paginated
			// elem.appendTo(container);

			return elem;
		}

		$("[enable-pagination=\"true\"]").each(function(){
			var paginationControlsHTML = $(paginationControls);
			var mainContainer = $(this);
			$(this).addClass('container').before(paginationControlsHTML);
			var columns = 12 / parseInt($(this).attr('columns'), 10);
			if (columns%1 > 0) {
				columns = 12;
			}
			var currentPage = 1;
			var paginateAfter = parseInt($(this).attr('paginate-after'), 10);
			var elementCount = $(this).children().length;

			if (isNaN(paginateAfter)){
				console.log("Invalid attribute value for 'paginate-after'. Defaulting to 10");
				paginateAfter = 10;
			}

			var numPages = Math.ceil(elementCount / paginateAfter);
			var pageContainers = [];
			paginationControlsHTML.find('.total-pages').html(numPages);

			for (var i = 1; i <= numPages; ++i){
				pageContainers.push(createPageContainer(i, mainContainer));
			}

			$(this).children().each(function(i, elem){
				elem = $(elem);
				elem.addClass('col-12 col-lg-' + columns);
				var page = Math.ceil((i+1) / paginateAfter);
				var findIndex = page - 1;
				var container = pageContainers[findIndex];
				
				elem.appendTo(container);
			});

			$.each(pageContainers, function(i,v){
				$(v).appendTo(mainContainer);
			});

			paginationControlsHTML.find(".paginate-back").click(function(){
				if (currentPage > 1){
					var currentContainer = pageContainers[currentPage - 1];
					currentContainer.hide("fast");
					--currentPage;
					paginationControlsHTML.find("[page-number]").html(currentPage);
					var container = pageContainers[currentPage - 1];
					container.show("fast");
				}
			});

			paginationControlsHTML.find(".paginate-forward").click(function(){
				if (currentPage < numPages){
					var currentContainer = pageContainers[currentPage - 1];
					currentContainer.hide("fast");
					++currentPage;
					paginationControlsHTML.find("[page-number]").html(currentPage);
					var container = pageContainers[currentPage - 1];
					container.show("fast");
				}
			});
		});
	})();