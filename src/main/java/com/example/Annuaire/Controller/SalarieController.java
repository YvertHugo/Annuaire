package com.example.Annuaire.Controller;

import com.example.Annuaire.Entity.Salarie;
import com.example.Annuaire.Service.ISalarieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/salaries")
public class SalarieController {

    @Autowired
    private ISalarieService SalarieService;

    @GetMapping
    public List<Salarie> getAllSalarie() {
        return SalarieService.findAll();
    }

    @PostMapping
    public Salarie createSalarie(@RequestBody Salarie salarie) {
        return SalarieService.save(salarie);
    }

    @PutMapping("update/{id}")
    public Salarie updateSalarie(@PathVariable Long id, @RequestBody Salarie salarie) {
        salarie.setId(id);
        return SalarieService.update(salarie);
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Salarie> getSalarieById(@PathVariable Long id) {
        Salarie salarie = SalarieService.findById(id);
        if (salarie != null) {
            return ResponseEntity.ok(salarie);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
