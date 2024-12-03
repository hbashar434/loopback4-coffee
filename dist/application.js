"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoopbackCoffeeApplication = void 0;
const boot_1 = require("@loopback/boot");
const rest_explorer_1 = require("@loopback/rest-explorer");
const rest_1 = require("@loopback/rest");
const repository_1 = require("@loopback/repository");
const path_1 = __importDefault(require("path"));
const sequence_1 = require("./sequence");
class LoopbackCoffeeApplication extends (0, boot_1.BootMixin)((0, repository_1.RepositoryMixin)(rest_1.RestApplication)) {
    constructor(options = {}) {
        super(options);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static("/", path_1.default.join(__dirname, "../public"));
        // Customize @loopback/rest-explorer configuration here
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: "/explorer",
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ["controllers"],
                extensions: [".controller.js"],
                nested: true,
            },
        };
    }
}
exports.LoopbackCoffeeApplication = LoopbackCoffeeApplication;
//# sourceMappingURL=application.js.map