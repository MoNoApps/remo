
REPORTER = dot


cov:
	@test -d reports || mkdir reports
	istanbul instrument --output api-cov api
	mv api api-orig && mv api-cov api
	ISTANBUL_REPORTERS=lcovonly mocha -R mocha-istanbul $(TESTS)
	mv lcov.info reports/
	rm -rf api
	mv api-orig api
	genhtml reports/lcov.info --output-directory reports/

test:
	@./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--slow 200ms \
		--bail

test-cov:
	istanbul cover mocha -- \
		--reporter $(REPORTER) \
		test/

clear:
	rm -fr coverage
	rm -fr reports
	rm -fr api-orig
	rm -fr api-cov
