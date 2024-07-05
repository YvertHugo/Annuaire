package com.example.Annuaire.Service;

import com.example.Annuaire.Entity.Salarie;

import java.util.List;

public interface ISalarieService {
    List<Salarie> findAll();
    Salarie save(Salarie salarie);
    Salarie update(Salarie salarie);
    Salarie findById(Long id);
}
