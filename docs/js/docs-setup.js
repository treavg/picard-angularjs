NG_DOCS={
  "sections": {
    "api": "Picard API Documentation"
  },
  "pages": [
    {
      "section": "api",
      "id": "picard",
      "shortName": "picard",
      "type": "overview",
      "moduleName": "picard",
      "shortDescription": "The picard module provides access to the picard api.  The module consists of multiple services, each of which",
      "keywords": "$scope access angular api arguments base_url cache call config consists constant controller corresponding ctrl define endpoint expose false fields fullresponse function functions html https io javascript js json module multiple ng-controller objects overview parameters picard picardadmin picardconfig picardexample res script services set single stack stack2 stackgetid"
    },
    {
      "section": "api",
      "id": "picard.config:picardConfig",
      "shortName": "picardConfig",
      "type": "object",
      "moduleName": "picard",
      "shortDescription": "Default values for making api requests",
      "keywords": "$http angularjs api base_url call config control data default describing endpoint entire fullresponse http https io list making object org picard picardconfig processed properties property request requests response returned stack true values"
    },
    {
      "section": "api",
      "id": "picard.config:picardEndpoints",
      "shortName": "picardEndpoints",
      "type": "object",
      "moduleName": "picard",
      "shortDescription": "Object with keys corresponding to endpoint routes (e.g. /custom/document) and values the corresponding",
      "keywords": "api config corresponding documentation endpoint object picard picardendpoints property routes values"
    },
    {
      "section": "api",
      "id": "picard.service.picard",
      "shortName": "picard.service.picard",
      "type": "service",
      "moduleName": "picard",
      "shortDescription": "Functions for HTTP requests.",
      "keywords": "address allows api backend base call change connection delete desired dynamic endpoint function functions http options override parameters picard picardbaseurl post preforms public request requests service updatebaseurl url valid"
    },
    {
      "section": "api",
      "id": "picard.service.picardAdmin",
      "shortName": "picard.service.picardAdmin",
      "type": "service",
      "moduleName": "picard",
      "shortDescription": "",
      "keywords": "$http 10 20 _source_exclude _source_include add address admin administrators angulars api apitest apitestrun app asc assembly assets authentication body cachefunctest call calling categories category checks client code column comma-separated comment config configflist configpubliclist configretrieve configs configupdate control controlpanellist create creates database dbconfig dblog dblogesquery dblogeventdelete dblogeventget dbloglist default del delete deletes desc description dictionary direction docs dropdowns dsl dynamic elastic elasticsearch email endpoint endpointerror entries event exclude existing false fields files filter filterable format formatted from_ frontend function generates generic hits html htmlbody include including info internal interpolate js jvars key limit list local log mail matches maximum message method mimetype minlength note null number offset optional order pagination paired pairs panels parameters params permissions picard picardadmin preopulating public qfilter queries query render rendering required response responses retrieve return returned role routes runs search searches service session set setdefault single sitemap size sort sortby sortorder stack_id stackgetid start starting static subject system template templatecatlist templatecreate templatefunctest templateget templatelist templates templatesdelete templateupdate test tests text timestamp true txtbody txtsubject unable update updates usage user users uuid viewed"
    },
    {
      "section": "api",
      "id": "picard.service.picardAuth",
      "shortName": "picard.service.picardAuth",
      "type": "service",
      "moduleName": "picard",
      "shortDescription": "",
      "keywords": "$http 10 20 255 64 access account accounts active add address adds admin admins alter angulars api apikey apikeycreate apikeydelete apikeyfunctest apikeyget apikeys apikeyuserlist app armored asc ascii assume attemps attempts authentication based call callback caller calling change changed characters check checks cleartext client client_id client_secret code column combo comment config configured confirm confirming create created creates creating credentials database dberror deactive default defaults delete deletes denied desc description desired determine documentconflict documentnotfound email email_optout email_validation_reset emailprefget emailprefupdate emails emailvalidationcreate emailvalidationdelete emailvalidationget emailvalidationlist emailvalidationreset endpoint endpointerror errors existing expiration extend extra extras failed failure false filter filterable flag forcing forgot-my-password formatting full function functionality generate generated generates getoauthuseraccount global gnupg group grouplist groups html https identify identity indicate indicating info invalid invalidating js json key length limit link list lists local log logged login logout logs maintained maxlength member members membership method minimum minlength models modify namstarte newpassword non-admin null number oauth oauthauthorize oauthcallback oauthprovider oauthprovidercreate oauthproviderdelete oauthproviderget oauthproviderlist oauthproviderlistunconfigured oauthproviders oauthproviderupdate oauthprovideruserlist oauthrevoke object objects oldpassword oneof operation opt optional optionally order org overwrites owner pair paired pass password password_change_nextlogin password_min_length passwordreset passwordresetcreate passwordresetdelete passwordupdate passwordupdatebytoken perform permission permissiondenied permissions pgp pgpkey pgpkeycreate pgpkeydelete pgpkeyget picard picardauth pref preferences prefs proper provider provider_name providers qfilter query random random_password reconfirmation redirect regauthcheckdectest regenerate register registered remember remove require required requirement requires reset resets response responses retrieve return returned returns revokes role role_id role_name rolecreate roledelete roleget rolelist roles roleupdate roleusercreate roleuserdelete running secret send send_welcome service session set setdefault setting simple sort sortby sortorder start starting system test testing tests token tokens true unable unconfigured update updates usage user user_creation_method user_id useractiveupdate usercreate userdelete useres userget usergroup usergroupcreate usergroupdelete usergroupget usergroupmembercreate usergroupmemberdelete usergroupmemberget usergroupupdate useridentitytest userlist username userpasswordchangeset users userupdate uuid validate validation verification"
    },
    {
      "section": "api",
      "id": "picard.service.picardCustom",
      "shortName": "picard.service.picardCustom",
      "type": "service",
      "moduleName": "picard",
      "shortDescription": "",
      "keywords": "$http 10 100 16 255 500 _id _source_exclude _source_include admin administrators aggregation aggs analyzers angulars api approved asc attach authentication automatically based big bit body boolean bucket bulk bulk_add bulkloadlist bulkloads bulkmod bytes calculated checks clauses clones collection column comma-separated comment commment completed consistency controlling controls corresponding count create created creates creation csv current currently custom data datasources default define defines defining definition delete deleted deletes deleteuploadprocessrecord denied des desc description determine dictionary direction doctype doctypecheck doctypeclone doctypecreate doctypedelete doctypeget doctypelist doctypename doctypenotfound doctypereindex doctypes doctypeupdate document documentbulkcreate documentconflict documentcreate documentdelete documentget documentnotfound documents documentsearch documentupdate download download_type dynamic enables endpoint endpointerror endswith ensure entries equal equalto errors exact exclude existing exists false field fields fieldupdate file filename files filesize filter filters find flag flatten flattend form full function getuploadprocessrecord global grouped grouping grouping_type grouping_uuid groupingcreate groupingdelete highlight highlighting hits id_seed ids include included indicating indice input inspect interest issues iterations js json lacks limit list listing load loaded loading locate mapping mappingcreate mappingget mappings master match matching maximum maxlength merge method minlength modified modifies modify multiple must_not newdescription newdoctypename null number numlines object offset ofthis oneof op operation optional optionally order owner pagination paired pairs parameter pause pause_after perm perm_type permission permissions permits picard picardcustom pop post post_filter prefix priveledges process processes properties public push qfilter queries query read readperm record referenced reindex reindexed reindexes reproducible request required response responses resume return returned role roleuser s3 score scores scoring search search_type seeding service set setdefault settings shard shards size sort sortby sortorder specific specifies start starting startloadingprocess starts store string suffix supports system target target_doctype testing thetarget track_scores true tsv type unable unique update updated updates updateuploadprocessrecord updating upload uploading uploads url usage user usergroup users uuid uuid5 valid values write writeperm written xls xlsx"
    },
    {
      "section": "api",
      "id": "picard.service.picardFiles",
      "shortName": "picard.service.picardFiles",
      "type": "service",
      "moduleName": "picard",
      "shortDescription": "",
      "keywords": "$http administrators angulars api associated attach authentication boolean comment content content-type contenttype credentials custom default defined delete deletefiles deletes doctype doctype_id doctypename document document_id documentnotfound documents downloads enable endpoint endpointerror false federation file filedelete filegetdownloadurl filegetuploadurl filename files filestore freeformatter function html http indicating jpeg jpg js json link linked method notrequire null oneof paired permissions picard picardfiles png provide publicread required response role service setdefault suffix system thenplease token true tsv type unable upload uploads usage user uuid valid xls xlsx"
    },
    {
      "section": "api",
      "id": "picard.service.picardGeoiptool",
      "shortName": "picard.service.picardGeoiptool",
      "type": "service",
      "moduleName": "picard",
      "shortDescription": "",
      "keywords": "$http 10 addresses angulars api attributes center city comment continent copy count country data default distance endpoint entries false flag function generate generates geoipclosebyname geoipdb geoipdbreload geoipguess geoiprandom guess guesses include ip js lat list location method null number paired permissions picard picardgeoiptool provided pulls random randomlist range reloads required response role service supertarget supertype system target targets targettype true type usage"
    },
    {
      "section": "api",
      "id": "picard.service.picardHubspot",
      "shortName": "picard.service.picardHubspot",
      "type": "service",
      "moduleName": "picard",
      "shortDescription": "",
      "keywords": "$http angulars api comment database db default endpoint execute function hubspot hubspotquery js method null paired params permissions picard picardhubspot queries query response role service system usage"
    },
    {
      "section": "api",
      "id": "picard.service.picardTerms",
      "shortName": "picard.service.picardTerms",
      "type": "service",
      "moduleName": "picard",
      "shortDescription": "",
      "keywords": "$http 20 accessing add agree agreement angulars api asc authentication boolean column comment created default delete desc description endpoint endpointerror false federatedtokens filter filterable form function include indicating js limit list method newest null number object order paired permissions picard picardterms qfilter required response responses role s3 s3creds service sort sortby sortorder start system terms termsformget tosform tosformcreate tosformdelete tosformlist tosforms url usage user usertos usertoscreate uuid"
    }
  ],
  "apis": {
    "api": true
  },
  "__file": "_FAKE_DEST_/js/docs-setup.js",
  "__options": {
    "startPage": "/api",
    "scripts": [
      "js/angular.min.js",
      "js/angular-animate.min.js",
      "js/marked.js",
      "js/dist/picard.js"
    ],
    "styles": [],
    "title": "Picard API Documentation",
    "html5Mode": true,
    "editExample": true,
    "navTemplate": false,
    "navContent": "",
    "navTemplateData": {},
    "loadDefaults": {
      "angular": true,
      "angularAnimate": true,
      "marked": true
    }
  },
  "html5Mode": true,
  "editExample": true,
  "startPage": "/api",
  "scripts": [
    "js/angular.min.js",
    "js/angular-animate.min.js",
    "js/marked.js",
    "js/dist/picard.js"
  ]
};