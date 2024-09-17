"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdTypeEntity = void 0;
var openapi = require("@nestjs/swagger");
var admin_entity_1 = require("../../admins/entities/admin.entity");
var user_entity_1 = require("../../users/entities/user.entity");
var id_type_enum_1 = require("../../utils/enums/id_type.enum");
var typeorm_1 = require("typeorm");
var IdTypeEntity = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _admin_decorators;
    var _admin_initializers = [];
    var _admin_extraInitializers = [];
    var _user_decorators;
    var _user_initializers = [];
    var _user_extraInitializers = [];
    var IdTypeEntity = _classThis = /** @class */ (function () {
        function IdTypeEntity_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.admin = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _admin_initializers, void 0));
            this.user = (__runInitializers(this, _admin_extraInitializers), __runInitializers(this, _user_initializers, void 0));
            __runInitializers(this, _user_extraInitializers);
        }
        IdTypeEntity_1._OPENAPI_METADATA_FACTORY = function () {
            return { id: { required: true, type: function () { return Number; } }, name: { required: true, enum: require("../../utils/enums/id_type.enum").IdType }, admin: { required: true, type: function () { return [require("../../admins/entities/admin.entity").Admin]; } }, user: { required: true, type: function () { return [require("../../users/entities/user.entity").User]; } } };
        };
        return IdTypeEntity_1;
    }());
    __setFunctionName(_classThis, "IdTypeEntity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)({ enum: id_type_enum_1.IdType })];
        _admin_decorators = [(0, typeorm_1.OneToMany)(function () { return admin_entity_1.Admin; }, function (admin) { return admin.id_type; })];
        _user_decorators = [(0, typeorm_1.OneToMany)(function () { return user_entity_1.User; }, function (user) { return user.id_type; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _admin_decorators, { kind: "field", name: "admin", static: false, private: false, access: { has: function (obj) { return "admin" in obj; }, get: function (obj) { return obj.admin; }, set: function (obj, value) { obj.admin = value; } }, metadata: _metadata }, _admin_initializers, _admin_extraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: function (obj) { return "user" in obj; }, get: function (obj) { return obj.user; }, set: function (obj, value) { obj.user = value; } }, metadata: _metadata }, _user_initializers, _user_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        IdTypeEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return IdTypeEntity = _classThis;
}();
exports.IdTypeEntity = IdTypeEntity;
