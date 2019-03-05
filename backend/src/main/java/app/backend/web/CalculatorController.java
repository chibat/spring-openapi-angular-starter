package app.backend.web;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.ApiOperation;
import lombok.Data;
import lombok.Value;

@RestController
public class CalculatorController {

    @PostMapping("/rest/api/add")
    @ApiOperation(value = "", tags = "calculator", nickname = "add")
    public Response add(@RequestBody final Request request) {
        return new Response(request.getArg1() + request.getArg2());
    }

    @Data
    public static class Request {
        private Integer arg1;
        private Integer arg2;
    }

    @Value
    public static class Response {
        private final Integer result;
    }
}
