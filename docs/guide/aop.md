---
layout: doc
---

## 切面描述
`@AcriAspect(fallback=Custom.class,before=true，beforeMethod="before")`

`注释事项:`任何自定义切面方法，方法的参数都是`AcriContainer container`,可以从该容器中获取调用方法的`返回值、参数、异常信息`

| 配置项    | 默认值   | 备注                                 |
|:-------|:------|:-----------------------------------|
| fallback  | null  | 自定义切面类 |
| before  | false  | 是否启用前置通知 |
| around  | false  | 是否启用环绕通知 |
| after  | false  | 是否启用后置通知 |
| throwing  | false  | 是否启用异常通知 |
| beforeMethod  | before  | 启用前置通知调用的默认方法名称 |
| beforeAroundMethod  | beforeAround  | 启用环绕通知（前置环绕）调用的默认方法名称 |
| afterAroundMethod  | afterAround  | 启用环绕通知（后置环绕）调用的默认方法名称 |
| afterMethod  | after  | 启用后置通知调用的默认方法名称 |
| throwingMethod  | throwing  | 启用异常通知调用的默认方法名称 |

## 使用案例
`@AcriAspect(fallback = TestController.class, around = true, throwing = true, before = true, after = true)`

```
@RestController
@Slf4j
public class TestController {
    //Acri AOP
    @AcriAspect(fallback = TestController.class, around = true, throwing = true, before = true, after = true)
    @GetMapping("/login")
    public User login(User param) {
        log.info("登录中,{}", param);
//        int i = 1 / 0;
        return new User();
    }
    //前置通知
    public void before(AcriContainer container) {
        log.info("before => {}", container.getParams() == null ? "" : container.getParams().toString());
    }
    //后置通知
    public void after(AcriContainer container) {
        log.info("after => {}", container.getResult() == null ? "" : container.getResult().toString());
        log.info("after => {}", container.getParams() == null ? "" : container.getParams().toString());
    }
    //前置环绕
    public void beforeAround(AcriContainer container) {
        log.info("beforeAround => {}", container.getParams() == null ? "" : container.getParams().toString());
    }
    //后置环绕
    public void afterAround(AcriContainer container) {
        log.info("afterAround => {}", container.getResult() == null ? "" : container.getResult().toString());
        log.info("afterAround => {}", container.getParams() == null ? "" : container.getParams().toString());
    }
    //异常通知
    public void throwing(AcriContainer container) {
        log.info("throwing => {}", container.getException() == null ? "" : container.getException().toString());
        log.info("throwing => {}", container.getParams() == null ? "" : container.getParams().toString());
    }
}


```
## 启用切面

比如启用前置切面，只需要设置`before = true`即可

```
@RestController
@Slf4j
public class TestController {

    @AcriAspect(fallback = TestController.class, before = true)
    @GetMapping("/login")
    public User login(User param) {
        log.info("登录中,{}", param);
        return new User();
    }
    public void before(AcriContainer container) {
        log.info("before => {}", container.getParams() == null ? "" : container.getParams().toString());
    }
   
}

```

## 自定义切面类、切面方法

`fallback = TestController.class`,自定义切面只需要将fallback对应的类换成自定义的即可。自定义切面方法
只要在注解对应切面设置方法名称即可，比如前置切面方法的自定义`beforeMethod="customBefore"`

`注意事项：`如果没有设置切面方法，在自定义切面类中定义的方法名=默认切面方法，比如前置切面没有设置`beforeMethod`，自定义方法名称就必须是`before`,而不是`customBefore`。因为前置切面`默认方法名是before`

```
@RestController
@Slf4j
public class TestController {

    @AcriAspect(fallback = TestController.class, before = true，beforeMethod="customBefore")
    @GetMapping("/login")
    public User login(User param) {
        log.info("登录中,{}", param);
        return new User();
    }
    public void customBefore(AcriContainer container) {
        log.info("before => {}", container.getParams() == null ? "" : container.getParams().toString());
    }
   
}

```